const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
const mongoose = require('mongoose');
const QuestionSet = require('../../../../models/questionSet');
const Result = require('../../../../models/result');
const Student = require('../../../../models/student');

const questionsetOjbect = {
  createForSeminar: async (req, res) => {
    try {
      const data = req.body;
      data.seminarId = req.params.id;
      const questionSets = await QuestionSet.find({ seminarId: req.params.id }).sort({serialNumber:1});
      console.log("***your question Sets******",questionSets);
      const serialNumber = questionSets.length > 0 ? questionSets[questionSets.length - 1].serialNumber + 1 : 1;
      data.serialNumber=serialNumber;
      console.log("***********serialNUmber************",serialNumber);


     const questionSet = await QuestionSet.create(data);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('QuestionSet'),
        data: questionSet,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      const questionSet = await QuestionSet.find({ _id: req.params.id });
      return res.success(questionSet);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getAllBySeminaryId: async (req, res) => {
    try {
      const seminarId = req.params.id;
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
        // projectStage, commenting out the project state because this is admin route so admin should able to see the correct ans
        facetStage,
      ];
      const resp = await QuestionSet.aggregate(pipeline);
      const totalCount =
        resp.length > 0 && resp[0].metadata.length > 0
          ? resp[0].metadata[0].total
          : 0;
      const data = resp.length > 0 && resp[0].data ? resp[0].data : [];

      return res.success({
        data,
        totalCount,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },


  questionSetOverview: async (req, res) => {
    try {

     const questionSet=await QuestionSet.findOne({_id:req.params.id});
    //  const student=await Student.find({seminarId:questionSet.seminaryObject});
    //  const result=await Result.find({questionSetId:req.params.id}); 
  const overView=await questionSetAllData(req,questionSet.seminarId,req.params.id)
     
      return res.success({
        data:overView
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getAll: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
        seminarId = null
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
          from: 'Seminar',
          localField: 'seminarId',
          foreignField: '_id',
          as: 'seminar',
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
          seminarName: {
            $arrayElemAt: ['$seminar.name', 0],
          },
          name:1,
          noOfQuestion:1,
          duration:1,
          serialNumber:1,
          isVisible:1,
          passingMarks:1,
          seminarId:1
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
      const totalCount =
        resp.length > 0 && resp[0].metadata.length > 0
          ? resp[0].metadata[0].total
          : 0;
      const data = resp.length > 0 && resp[0].data ? resp[0].data : [];

      return res.success({
        data,
        totalCount,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  changeVisibility: async (req, res) => {
    try {
      const { seminarId } = req.body;
      await QuestionSet.updateMany(
        { seminarId: seminarId },
        { $set: { isVisible: false } }
      );
      let existing = await QuestionSet.findOne({
        _id: req.params.id,
      });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('QuestionSet');
        return res.unprocessableEntity(errors);
      }
      existing.isVisible =true;
      await existing.save();
      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('Visibility'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  update: async (req, res) => {
    try {
      let existing = await QuestionSet.findOne({
        _id: req.params.id,
      });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('QuestionSet');
        return res.unprocessableEntity(errors);
      }
      await QuestionSet.findOneAndUpdate({ _id: req.params.id }, req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('QuestionSet'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  delete: async (req, res) => {
    try {
      let existing = await QuestionSet.findOne({ _id: req.params.id });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('QuestionSet');
        return res.unprocessableEntity(errors);
      }
      await QuestionSet.findOneAndDelete({ _id: req.params.id });
      
      return res.success({
        message: MESSAGES.apiSuccessStrings.DELETED('QuestionSet'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};

module.exports = questionsetOjbect;


async function  questionSetAllData(req,seminarId,questionSetId){

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
      answers:0,
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
  };

}