const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
const mongoose = require('mongoose');
const Feedback = require('../../../../models/feedback');
// const Question = require('../../../../models/question');
const Result = require('../../../../models/result');
const Student = require('../../../../models/student');
const {
  handleBufferUpload,
  deleteFile,
} = require('../../../../../utils/cloudinary');

const obj = {
  createFeedback: async (req, res) => {
    try {
      if (req.body.options) {
        // req.body.options = req.body.options.split(',');

        req.body.options = JSON.parse(req.body.options);
      }

      let data = req.body;
      if (req.file) {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
        data.queImageUrl = await handleBufferUpload(dataURI);
      }

      // const feedback = await Feedback.findOne({seminarId: req.body.seminarId});
      // if (feedback) {
      //   let errors = MESSAGES.apiErrorStrings.Data_EXISTS('Feedback');
      //   return res.unprocessableEntity(errors);
      // }

      await Feedback.create(data);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('Feedback'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      const questionSet = await Feedback.find({ _id: req.params.id });
      return res.success(questionSet);
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
        seminarId = null,
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
          question: 1,
          _id: 1,
        },
      };
      const pipeline = [
        matchStage,
        sortStage,
        lookupStage,
        projectStage,
        facetStage,
      ];
      const resp = await Feedback.aggregate(pipeline);
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
  getFeedbackBySeminarId: async (req, res) => {
    try {
      let { seminarId = null } = req.query;

      const matchStage = {
        $match: {
          seminarId: new mongoose.Types.ObjectId(seminarId),
        },
      };

      const projectStage = {
        $project: {
          question: 1,
          _id: 1,
          seminarId: 1,
          type: 1,
          options: 1,
          queImageUrl: 1,
        },
      };
      const pipeline = [matchStage, projectStage];
      const resp = await Feedback.aggregate(pipeline);

      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  update: async (req, res) => {
    try {
      let existing = await Feedback.findOne({
        _id: req.params.id,
      });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Feedback');
        return res.unprocessableEntity(errors);
      }

      if (req.body.options) {
        // req.body.options = req.body.options.split(',');

        req.body.options = JSON.parse(req.body.options);
      }

      if (req.file) {
        if (req.file) {
          const b64 = Buffer.from(req.file.buffer).toString('base64');
          let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
          req.body.queImageUrl = await handleBufferUpload(dataURI);
        }
      }

      await Feedback.findOneAndUpdate({ _id: req.params.id }, req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('Feedback'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  delete: async (req, res) => {
    try {
      let existing = await Feedback.findOne({ _id: req.params.id });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Feedback');
        return res.unprocessableEntity(errors);
      }

      if (existing.queImageUrl) {
        await deleteFile(existing.queImageUrl);
      }

      await Feedback.findOneAndDelete({ _id: req.params.id });
      // await Question.deleteMany({ questionSetId: req.params.id });

      return res.success({
        message: MESSAGES.apiSuccessStrings.DELETED('Feedback'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};

module.exports = obj;
