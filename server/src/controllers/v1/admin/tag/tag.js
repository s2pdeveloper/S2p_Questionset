const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
const mongoose = require('mongoose');
const Tag = require('../../../../models/tag');

const obj = {
  createTag: async (req, res) => {
    try {
      let existing = await Tag.findOne({ name: req.body.name });
      if (existing) {
        let errors = MESSAGES.apiErrorStrings.Data_EXISTS('Tag');
        return res.unprocessableEntity(errors);
      }

      await Tag.create(req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('Tag'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      const tag = await Tag.find({ _id: req.params.id });
      return res.success(tag);
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
          _id: 1,
          name: 1,
        },
      };
      const pipeline = [matchStage, sortStage, projectStage, facetStage];
      const resp = await Tag.aggregate(pipeline);
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

  update: async (req, res) => {
    try {
      let existing = await Tag.findOne({
        _id: req.params.id,
      });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Tag');
        return res.unprocessableEntity(errors);
      }

      await Tag.findOneAndUpdate({ _id: req.params.id }, req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('Tag'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  delete: async (req, res) => {
    try {
      let existing = await Tag.findOne({ _id: req.params.id });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Tag');
        return res.unprocessableEntity(errors);
      }
      await Tag.findOneAndDelete({ _id: req.params.id });
      return res.success({
        message: MESSAGES.apiSuccessStrings.DELETED('Tag'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  masterData: async (req, res) => {
    try {
      let tags = await Tag.find().sort({ createdAt: 'desc' });
      return res.success(tags);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};

module.exports = obj;
