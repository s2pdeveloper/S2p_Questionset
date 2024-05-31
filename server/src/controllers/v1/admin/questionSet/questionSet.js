const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
// const OrdersRepository = require('../../../../models/repository/OrderRepository');
const mongoose = require('mongoose');
const { generateCreateData } = OPTIONS;
const QuestionSet = require('../../../../models/questionSet');
const questionsetOjbect = {
  createForSeminar: async (req, res) => {
    try {
      const data = req.body;
      data.seminarId=req.params.id
      console.log("you hit the create question set")
      const seminar = await QuestionSet.create(data);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('QuestionSet'),
        seminary: seminar,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      console.log("you hit the get by id question set",req.params.id);
      const seminar = await QuestionSet.find({ _id: req.params.id });
      return res.success(seminar);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getAllBySeminaryId: async (req, res) => {
    try {
      console.log("you hit the get by id question set",req.params.id);
      const seminar = await QuestionSet.find({ seminarId: req.params.id });
      // return res.success(seminar);

      const DATA = req.body;
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;

      let seminarId=req.params.id
      
      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);
      
      const skip = Math.max(0, page - 1) * pageSize;
  
      const matchStage = {
        $match: {
          ...(seminarId && { seminarId: new mongoose.Types.ObjectId(seminarId) }),
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
      const pipeline = [matchStage, sortStage, facetStage];
      const resp = await QuestionSet.aggregate(pipeline);
      return res.success(resp);



    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },



  

  changeVisibility: async (req, res) => {
    console.log('req.params.id', req.params.id);
    try {
      let existing = await QuestionSet.findOne({
        _id: req.params.id,
      });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('QuestionSet');
        return res.unprocessableEntity(errors);
      }


      existing.isVisible=!existing.isVisible
     await existing.save()
     

      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('visibility of QuestionSet'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  update: async (req, res) => {
    console.log('req.params.id', req.params.id);
    try {
      let existing = await QuestionSet.findOne({
        _id: req.params.id,
      });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('QuestionSet');
        return res.unprocessableEntity(errors);
      }

      let seminar = await QuestionSet.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );

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
