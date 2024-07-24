const bcrypt = require('bcrypt');
const QRCode=require("qrcode")
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const resCode = MESSAGES.resCode;
const OPTIONS = require('../../../../config/Options');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { generateCreateData } = OPTIONS;

const Seminar = require('../../../../models/seminar');
const QuestionSet=require('../../../../models/questionSet')
const Student=require('../../../../models/student');
const Questionset = require('../../../../models/questionSet');
const Result = require('../../../../models/result');





const seminaryObject = {

  

  generateQrCode: async (req, res) => {
    try {
const frontEndBaseUrl=process.env.FRONTEND_BASE_URL?process.env.FRONTEND_BASE_URL:"http://localhost:2024"      
const Url=`${frontEndBaseUrl}/login?seminarId=${req.params.id}`
const QrImage=await QRCode.toDataURL(Url);
const QrImageData=QrImage.replace(/^data:image\/png;base64,/,"")
res.setHeader("content-Type","image/png")
res.send(Buffer.from(QrImageData,"base64"));
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
      } = req.query;
      const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);

      const pipeline = [
        {
          $match: {
            ...(![undefined, null, ''].includes(search) && {
              $text: { $search: search },
            }),
          },
        },
        { $sort: { [column]: direction } },
        {
          $facet: {
            metadata: [{ $count: 'total' }],
            data: [{ $skip: skip }, { $limit: parseInt(pageSize, 10) }],
          },
        },
      ];
      const resp = await Seminar.aggregate(pipeline);
      const totalCount = (resp.length > 0 && resp[0].metadata.length > 0) ? resp[0].metadata[0].total : 0;
      const data = (resp.length > 0 && resp[0].data) ? resp[0].data : [];
    
      return res.success({
        data,
        totalCount
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },


  seminarOverView: async (req, res) => {
    try {

      const seminar=await Seminar.findOne({_id:req.params.id})
      console.log("*********find the seminar******* ",seminar)
      const questionset=await Questionset.find({seminarId:req.params.id})
      console.log("*****your questionSet*******",questionset);
      

      const questionSetOverView = await Promise.all(
        questionset.map(async (eachSet) => {
          const data = await questionSetAllData(req, req.params.id, eachSet._id);
          return data;
        })
      );

      var noOfAttemptedStudent=0;
      var noOfUnattemptedStudent=0;
      var percentageOfPassStudent=0;
      var percentageOfFailStudent=0;
      var noOfPassStudent=0;
      var noOfFailStudent=0;

      var numberOfSet=questionSetOverView.length;
      console.log("length of set",numberOfSet)

      questionSetOverView.map((eachSet)=>{
        noOfAttemptedStudent+=eachSet.noOfAttemptedStudent;
        noOfUnattemptedStudent+=eachSet.noOfUnattemptedStudent;
        percentageOfPassStudent+=eachSet.percentageOfPassStudent;
        percentageOfFailStudent+=eachSet.percentageOfFailStudent;
        noOfPassStudent+=eachSet.noOfPassStudent;
        noOfFailStudent+=eachSet.noOfFailStudent;
      })
     
      console.log("nofofAttempted student",noOfAttemptedStudent)

      data={
      name:seminar.name,
      NoOfStudent:questionSetOverView[0]?questionSetOverView[0].totalStudent:0,
        avgNoOfAttemptedStudent:noOfAttemptedStudent/numberOfSet,
        avgNoOfUnattemptedStudent:noOfUnattemptedStudent/numberOfSet,
        avgPercentageOfPassStudent:percentageOfPassStudent/numberOfSet,
        avgPercentageOfFailStudent:percentageOfFailStudent/numberOfSet,
        avgNoOfPassStudent:noOfPassStudent/numberOfSet,
        avgNoOfFailStudent:noOfFailStudent/numberOfSet,
        setsData:questionSetOverView
      }

      res.success(data)
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },



  getAllQuestionSet: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
        seminarId
      } = req.query;
      const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);

      const pipeline = [
        {
          $match: {
             ...(seminarId && {
              seminarId: new mongoose.Types.ObjectId(seminarId),
            }),
           
          },
        },
        { $sort: { [column]: direction } },
        {
          $facet: {
            metadata: [{ $count: 'total' }],
            data: [{ $skip: skip }, { $limit: parseInt(pageSize, 10) }],
          },
        },
      ];
      const resp = await QuestionSet.aggregate(pipeline);
      const totalCount = (resp.length > 0 && resp[0].metadata.length > 0) ? resp[0].metadata[0].total : 0;
      const data = (resp.length > 0 && resp[0].data) ? resp[0].data : [];
    
      return res.success({
        data,
        totalCount
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
  const overView=await questionSetOverview(req,questionSet.seminarId,req.params.id)
     
      return res.success({
        data:overView
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  

  getList: async (req, res) => {
    try {
      
      const data = await Seminar.find().select('_id name')
      .sort({'createdAt': 'desc' }) ;

      return res.success({
        data
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  create: async (req, res) => {
    try {
      const data = req.body;
      await Seminar.create(data);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('Seminar'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      const seminar = await Seminar.find({ _id: req.params.id });
      return res.success(seminar);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  update: async (req, res) => {
    try {
      let existing = await Seminar.findOne({
        _id: req.params.id,
      });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Seminar');
        return res.unprocessableEntity(errors);
      }

      await Seminar.findOneAndUpdate({ _id: req.params.id }, req.body);

      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('Seminar'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  delete: async (req, res) => {
    try {
      let existing = await Seminar.findOne({ _id: req.params.id });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Seminar');
        return res.unprocessableEntity(errors);
      }

      await Seminar.findOneAndDelete({ _id: req.params.id });

      return res.success({
        message: MESSAGES.apiSuccessStrings.DELETED('Seminar'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};

module.exports = seminaryObject;





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
     
      "studentInfo.updatedAt":0,
      "studentInfo.createdAt":0,
      "studentInfo.seminarId":0,
      "studentInfo.degree":0,
     
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

  const questionSet=await Questionset.findById(questionSetId)

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
    name:questionSet.name,
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

