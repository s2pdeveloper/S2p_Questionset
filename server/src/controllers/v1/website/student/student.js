const bcrypt = require('bcrypt');
const { Student } = require('../../../../models/student');
const QuestionSet = require('../../../../models/questionSet');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const mongoose = require('mongoose');
const Question = require('../../../../models/question');
const Questionset = require('../../../../models/questionSet');
const Result = require('../../../../models/result');
const { eq } = require('lodash');

const customerobj = {
  registerStudent: async (req, res) => {
    try {
      const data = req.body;
      data.seminarId = req.params.id;
      const student = await Student.create(data);
      if (student) {
        const token = student.genToken();
        console.log('token', token);

        res.status(201).json({
          message: MESSAGES.apiSuccessStrings.ADDED('Student'),
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
  getAllQuestionSetOfSeminar: async (req, res) => {
    try {
      const seminarId = req.body.seminarId;
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
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  testByQuestionSet: async (req, res) => {
    try {
      const data = req.body;
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
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  submitTest: async (req, res) => {
    try {
      const marksPerQuestion = 10;
      const { studentId, seminarId, questionSetId, answers } = req.body;
      const questions = await Question.find({ questionSetId });
      let correctAnswers = 0;
      answers.forEach((answer) => {
        const questionId = Object.keys(answer)[0];
        const question = questions.find((q) => q._id.toString() === questionId);
        if (question && question.correctOption === answer[questionId]) {
          correctAnswers++;
        }
      });

      // Fetch question set details
      const questionSet = await Questionset.findById(questionSetId);
      console.log('your questionset', questionSet);
      if (!questionSet) {
        // Handle case where question set is not found
        const errors = 'Question set Not found';
        res.serverError(errors);
        return;
      }

      // Calculate max score, obtained marks, passing marks, and status
      const maxScore = Number(questionSet.noOfQuestion * marksPerQuestion);
      const obtainMarks = correctAnswers * marksPerQuestion;
      const passingMarks = questionSet.passingMarks;
      const status = obtainMarks >= passingMarks ? 'PASS' : 'FAIL';

      //checking student already submited the test or not

      let existing = Result.findOne({
        questionSetId: questionSetId,
        studentId,
        studentId,
      });

      if (existing) {
        let errors = 'Result Submited Alread Can not submit twice';
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
      };

      const result = await Result.create(resultData);

      res.success(result);
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
      const seminarId = req.user ? req.user.seminarId : req.body.seminarId;
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
        search = null,
        column = 'obtainMarks',
        direction = -1,
      } = req.query;

      const questionSetId = req.body.questionSetId;
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
      const facetStage = {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [{ $skip: skip }, { $limit: pageSize }],
        },
      };

      const pipeline = [matchStage, { $sort: { obtainMarks: -1 } }, facetStage];
      const resp = await Result.aggregate(pipeline);

      resp[0].data.forEach((item, index) => {
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
      noOfFailStudent = totalStudent - noOfPassStudent;

     noOfAttemptedStudent=await Result.countDocuments({seminarId:seminarId,questionSetId:questionSetId})
     noOfUnattemptedStudent=totalStudent-noOfAttemptedStudent;

      percentageOfFailStudent = (noOfFailStudent / totalStudent) * 100;
      percentageOfPassStudent = (noOfPassStudent / totalStudent) * 100;


      res.status(200).json({
        totalStudent,
        noOfAttemptedStudent,
        noOfUnattemptedStudent,
        percentageOfPassStudent,
        percentageOfFailStudent,
        noOfPassStudent,
        noOfFailStudent,
        topStudent,
        student,
      });
    } catch (error) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },
};

module.exports = customerobj;
