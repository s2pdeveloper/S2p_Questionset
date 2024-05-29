const bcrypt = require('bcrypt');

const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const resCode = MESSAGES.resCode;
const OPTIONS = require('../../../../config/Options');
const RoleRepository = require('../../../../models/repository/RoleRepository');

const mongoose = require("mongoose");
const { generateCreateData } = OPTIONS;
const mail = require('../../../../models/helpers/EmailHelper');
const { log } = require('handlebars');
const ROLE = require('../../../../models/role');

const roleObj = {
  
  getAll: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
        // status = [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
      } = req.query;
      const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);
      // if (status && status !== 'all' && status !== 'null') {
      //   status =
      //     status && typeof status === 'string' ? status.split(',') : status;
      // }
      const pipeline = [
        {
          $match: {
            // status: {
            //   $in: status,
            // },
            ...(![undefined, null, ''].includes(search) && {
              $text: { $search: search },
            }),
          },
        },
        {
          $project: {
            _id: 1,
            id: '_id',
            name: 1,
            description: 1,
            status: 1,
            createdAt: 1,
           
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
      const resp = await RoleRepository.getAndCountAll(pipeline);
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
    
  
   
  create: async (req, res) => {
    try {
      let existing = await ROLE.findOne({
        name: req.body.name.toLowerCase(),
      });
      if (existing) {
        let errors = MESSAGES.apiErrorStrings.Data_EXISTS('Role');

        return res.preconditionFailed(errors);
      }
      await ROLE.create(req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('Role'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      let existing = await ROLE.findOne({
        _id: req.params.id,
      });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Role');
        return res.unprocessableEntity(errors);
      }
      return res.success(existing);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getByName: async (req, res) => {
    try {
      let existing = await ROLE.findOne({
        name: req.params.name,
      });
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Role');
        return res.unprocessableEntity(errors);
      }
      return res.success(existing);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  update: async (req, res) => {
    try {
      let itemDetails = await ROLE.findOne({
        _id: req.params.id,
      });
      if (!itemDetails) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The Role');
        return res.unprocessableEntity(errors);
      } else {
        itemDetails = await OPTIONS.generateCreateData(itemDetails, req.body);
        await itemDetails.save();
        return res.success({
          message: MESSAGES.apiSuccessStrings.UPDATE('The Role'),
        });
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  deleteById: async (req, res) => {
    try {
      const deleteItem = await ROLE.findById(req.params.id);
      if (deleteItem) {
        await deleteItem.deleteOne();
        return res.success({
          message: MESSAGES.apiSuccessStrings.DELETED(" Role"),
        });
      } else {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS(" Role");
        res.preconditionFailed(errors);
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      console.error(e);
    }
  },

};
module.exports = roleObj;
