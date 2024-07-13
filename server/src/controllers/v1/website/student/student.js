
const { Student } = require('../../../../models/student');
const QuestionSet = require('../../../../models/questionSet');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const mongoose = require('mongoose');
const Question = require('../../../../models/question');
const Questionset = require('../../../../models/questionSet');
const Result = require('../../../../models/result');


const customerobj = {
  registerStudent: async (req, res) => {
    try {
      const data = req.body;
      data.seminarId = req.params.id;
      const existing = await Student.findOne({ email: req.body.email });
      if (existing) {
        const errors = 'Email Already Exist';
        return res.serverError(errors);
      }
      delete data.id;
      delete data._id;
      const student = await Student.create(data);
      if (student) {
        const token = student.genToken();
      

        res.status(201).json({
          message: "Registration Successful",
          studentId: student._id,
          token: token,
        });
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  getVisibleQuestionSet: async (req, res) => {
    try {
      const seminarId = req.query.id;
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;
      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);
      const skip = Math.max(0, page - 1) * pageSize;
      const matchStage = {
        $match: {
          ...(seminarId && {
            seminarId: new mongoose.Types.ObjectId(seminarId),
          }),

          isVisible: true,

          ...(![undefined, null, ''].includes(search) && {
            $text: { $search: search },
          }),
        },
      };

      const lookupStage = {
        $lookup: {
          from: 'Question',
          localField: '_id',
          foreignField: 'questionSetId',
          as: 'questions',
        },
      };

      const sortStage = { $sort: { [column]: direction } };
      const facetStage = {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [{ $skip: skip }, { $limit: pageSize }],
        },
      };
      const projectStage = {
        $project: {
          'questions.correctOption': 0,
        },
      };
      const pipeline = [
        matchStage,
        sortStage,
        lookupStage,
        projectStage,
        facetStage,
      ];
      const resp = await QuestionSet.aggregate(pipeline);

      const data = resp.length > 0 && resp[0].data ? resp[0].data[0] : [];

      console.log('your data', data.option);
      return res.success({ data });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  testByQuestionSet: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;

      let questionSetId = req.params.id;

      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);

      const skip = Math.max(0, page - 1) * pageSize;

      const matchStage = {
        $match: {
          ...(questionSetId && {
            questionSetId: new mongoose.Types.ObjectId(questionSetId),
          }),
          ...(![undefined, null, ''].includes(search) && {
            $text: { $search: search },
          }),
        },
      };
      const sortStage = { $sort: { [column]: direction } };
      const facetStage = {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [{ $skip: skip }, { $limit: pageSize }],
        },
      };
      const projectStage = {
        $project: {
          correctOption: 0,
        },
      };
      const pipeline = [matchStage, sortStage, projectStage, facetStage];
      const resp = await Question.aggregate(pipeline);
      const totalCount =
        resp.length > 0 && resp[0].metadata.length > 0
          ? resp[0].metadata[0].total
          : 0;
      const data = resp.length > 0 && resp[0].data ? resp[0].data : [];
      return res.success({ data, totalCount });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  submitTest: async (req, res) => {
    try {
      const marksPerQuestion = 1;
      const { studentId, seminarId, questionSetId, answers } = req.body;
      // Fetch question set details
      const questionSet = await Questionset.findById(questionSetId);

      if (!questionSet) {
        // Handle case where question set is not found
        const errors = 'Question set Not found';
        res.serverError(errors);
        return;
      }

      if (!questionSet.isVisible) {
        const errors = 'This Question No more Available';
        res.serverError(errors);
        return;
      }
      const questions = await Question.find({ questionSetId });
      let correctAnswers = 0;
      answers.forEach((answer) => {
        const questionId = Object.keys(answer)[0];
        const question = questions.find((q) => q._id.toString() === questionId);
        if (question && question.correctOption === answer[questionId]) {
          correctAnswers++;
        }
      });

      // Calculate max score, obtained marks, passing marks, and status
      const maxScore = Number(questionSet.noOfQuestion * marksPerQuestion);
      const obtainMarks = correctAnswers * marksPerQuestion;
      const passingMarks = questionSet.passingMarks;
      const status = obtainMarks >= passingMarks ? 'PASS' : 'FAIL';

      //checking student already submited the test or not

      let existing = await Result.findOne({
        questionSetId: questionSetId,
        studentId: studentId,
      });

      if (existing) {
        let errors = 'Test Already Submited';
        return res.unprocessableEntity(errors);
      }

      // Create result data object
      const resultData = {
        studentId,
        questionSetId,
        seminarId,
        status,
        obtainMarks,
        passingMarks,
        maxScore,
        answers,
      };
      await Result.create(resultData);

      res.success({
        message: 'Test Submited',
      });
    } catch (error) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },

  login: async (req, res) => {
    try {
      console.log('hit the login of student');
      const { phone } = req.body;

      const user = await Student.findOne({ phone: phone });
      console.log('your student', user);
      if (!user) {
        const errors = MESSAGES.apiErrorStrings.USER_NOT_EXISTS;
        return res.serverError(errors);
        throw new Error(errors);
      }

      const token = user.genToken();
      const data = { message:"Login successful", user: user, token: token };

      res.success(data);
    } catch (error) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },

  getResultByQuestionSetId: async (req, res) => {
    try {
      const questionSetId = req.params.id;
      const studentId = req.user ? req.user._id : req.body.studentId;
     
      const result = await Result.findOne({
        studentId: studentId,
        questionSetId: questionSetId,
      });

      res.status(200).json({
        result,
      });
    } catch (error) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },

  rankedResult: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 9999,
        direction = -1,
      } = req.query;

      const questionSetId = req.body.questionSetId;
      const existing=await QuestionSet.findById(questionSetId);
      if(!existing){

      const errors = "Question set Not Exist";
        return res.serverError(errors);
      }
      const studentId = req.user ? req.user._id : req.body.studentId;
      const seminarId = req.user ? req.user.seminarId : req.body.seminarId;
      let top = req.query.top || 3;
      let noOfPassStudent = 0;
      let noOfFailStudent = 0;
      let percentageOfFailStudent = null;
      let percentageOfPassStudent = null;
      let noOfAttemptedStudent = 0;
      let noOfUnattemptedStudent = 0;
      let student = null;
      let topStudent = [];
      let totalStudent = null;

      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);
      const skip = Math.max(0, page - 1) * pageSize;
      const matchStage = {
        $match: {
          ...(seminarId && {
            seminarId: new mongoose.Types.ObjectId(seminarId),
          }),
          ...(questionSetId && {
            questionSetId: new mongoose.Types.ObjectId(questionSetId),
          }),
        },
      };

      const lookupStage = {
        $lookup: {
          from: 'Student',
          localField: 'studentId',
          foreignField: '_id',
          as: 'studentInfo',
        },
      };

      const project={  
          $project: {
            maxScore: 0,
            passingMarks:0,
            answers:0,
            createdAt:0,
            updatedAt:0,
            seminarId:0,
            questionsetId:0,
            __v:0,
            "studentInfo.createdAt":0,
            "studentInfo.updatedAt":0,
            "studentInfo.isDelete":0,
            "studentInfo.degree":0,
            "studentInfo.seminarId":0,
            "studentInfo.__v":0,
            "studentInfo.branch":0,
          },
        
      }

      const unwindStage = {
        $unwind: '$studentInfo', // Unwind to get each studentInfo object separately
      };

      const pipeline = [
        matchStage,
        lookupStage,
        unwindStage,
        project,
        { $sort: { obtainMarks: -1 } },
      ];
      const resp = await Result.aggregate(pipeline);
      console.log("your resp",resp)
      resp.forEach((item, index) => {
        item.rank = index + 1;
        if (item.status == 'PASS') {
          noOfPassStudent++;
        }
        if (item.studentId == studentId) {
          student = { ...item, rank: index + 1 };
        }
        if (index < top) {
          topStudent.push(item);
        }
      });

      totalStudent = await Student.countDocuments({
        seminarId: seminarId,
      });

      noOfAttemptedStudent = resp.length;
      noOfUnattemptedStudent = totalStudent - noOfAttemptedStudent;
      noOfFailStudent = totalStudent - noOfPassStudent;

      percentageOfFailStudent =Number(((noOfFailStudent / totalStudent)* 100).toFixed(0));
      percentageOfPassStudent = Number(((noOfPassStudent / totalStudent)* 100).toFixed(0));

      res.status(200).json({
        totalStudent,
        noOfAttemptedStudent,
        noOfUnattemptedStudent,
        percentageOfPassStudent,
        percentageOfFailStudent,
        noOfPassStudent,
        noOfFailStudent,
        maxScore: existing.noOfQuestion,
        passingMarks: existing.passingMarks,
        topStudent,
        student,
      });
    } catch (error) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },

  allResultOfStudent: async (req, res) => {
    try {

      const studentId = req.body.studentId;
      const seminarId = req.body.seminarId;
      const Results = [];
      const results = await Result.find({ studentId, seminarId });
      for (const eachResult of results)
     {
        const questionSetId = eachResult.questionSetId;
        const matchStage = {
          $match: {
            _id: new mongoose.Types.ObjectId(questionSetId), // Use questionSetId from each result
          },
        };
        const lookupStage = {
          $lookup: {
            from: 'Question',
            localField: '_id',
            foreignField: 'questionSetId',
            as: 'questions',
          },
        };


        const projectStage={
          $project:{
            createdAt:0,
            updatedAt:0,
            __v:0,
            isClose:0,
            isVisible:0,
            serialNumber:0,
            "questions.updatedAt":0,
            "questions.createdAt":0,
            "questions.__v":0
          }
        }

        const pipeline = [matchStage, lookupStage,projectStage];
        const resp = await QuestionSet.aggregate(pipeline);

      
        const data = {
          questionSet: resp[0],
        };

        data.result = await resultOverView(  
          req,
          eachResult.questionSetId,
          eachResult.studentId,
          eachResult.seminarId
        );

       //appending the student answer to particular question of question_set
     data.result.student.answers.map((answer)=>{
             data.questionSet.questions.forEach((question)=>{
              if(Object.keys(answer)[0]==question._id){
                question.studentAnswer=answer[Object.keys(answer)[0]];
              }
             })
     })
        Results.push(data);//appending the data to results array 
      }

      console.log("result",Result)

      res.status(200).json({ Results });
    } catch (error) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },
};

module.exports = customerobj;

async function resultOverView(req, questionSetId, studentId, seminarId) {
  let {
    page = 1,
    pageSize = 9999,
    search = null,
    column = 'obtainMarks',
    direction = -1,
  } = req.query;

  let top = req.query.top || 3;
  let noOfPassStudent = 0;
  let noOfFailStudent = 0;
  let percentageOfFailStudent = null;
  let percentageOfPassStudent = null;
  let noOfAttemptedStudent = 0;
  let noOfUnattemptedStudent = 0;
  let student = null;
  let topStudent = [];
  let totalStudent = null;

  page = parseInt(page, 10);
  pageSize = parseInt(pageSize, 10);
  direction = parseInt(direction, 10);
  const skip = Math.max(0, page - 1) * pageSize;
  const matchStage = {
    $match: {
      ...(seminarId && {
        seminarId: new mongoose.Types.ObjectId(seminarId),
      }),
      ...(questionSetId && {
        questionSetId: new mongoose.Types.ObjectId(questionSetId),
      }),
    }, 
   
  };

  const lookupStage={
    $lookup: {
      from: 'Student',
      localField: 'studentId',
      foreignField: '_id',
      as: 'studentInfo',
    },
  }

  const projectStage= {
    $project: {
      seminarId:0, 
      createdAt:0,
      updatedAt:0,
      __v:0,
      "studentInfo.email":0,
      "studentInfo.updatedAt":0,
      "studentInfo.createdAt":0,
      "studentInfo.seminarId":0,
      "studentInfo.degree":0,
      "studentInfo.phone":0,
      "studentInfo.isDelete":0,
      "studentInfo.branch":0,
      "studentInfo.__v":0,
      "studentInfo._id":0,
      "studentInfo.gender":0,
    },
  }


  // const facetStage = {
  //   $facet: {
  //     metadata: [{ $count: 'total' }],
  //     data: [{ $skip: skip }, { $limit: pageSize }],
  //   },
  // };
  const pipeline = [matchStage, { $sort: { obtainMarks: -1 } },lookupStage,projectStage];

  const resp = await Result.aggregate(pipeline);

  console.log("your respose must watch",resp)
  resp.forEach((item, index) => {
    item.rank = index + 1;
    if (item.status == 'PASS') {
      noOfPassStudent++;
    }
    if (item.studentId.equals(studentId)) {
      student = { ...item, rank: index + 1 };
    }
    if (index < top) {
      topStudent.push(item);
    }
  });

  totalStudent = await Student.countDocuments({
    seminarId: seminarId,
  });

  noOfAttemptedStudent = resp.length;
  noOfUnattemptedStudent = totalStudent - noOfAttemptedStudent;
  noOfFailStudent = totalStudent - noOfPassStudent;

  percentageOfFailStudent =Math.round(( (noOfFailStudent / totalStudent) * 100));
  percentageOfPassStudent =Math.round( ((noOfPassStudent / totalStudent) * 100));

  return {
    totalStudent,
    noOfAttemptedStudent,
    noOfUnattemptedStudent,
    percentageOfPassStudent,
    percentageOfFailStudent,
    noOfPassStudent,
    noOfFailStudent,
    topStudent,
    student,
  };
}
