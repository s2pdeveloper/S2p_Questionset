const mongoose = require('mongoose');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
const CatalogueRepository = require('../../../../models/repository/CatalogueRepository');
const catalogueObj = {
  getAll: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
        shopId = null,
        status = [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
      } = req.query;
      const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);
      status =
        OPTIONS.usersRoles.SHOP === req.user.role
          ? status
          : OPTIONS.defaultStatus.ACTIVE;
      if (status && status !== 'all' && status !== 'null') {
        status =
          status && typeof status === 'string' ? status.split(',') : status;
      }
      shopId =
        OPTIONS.usersRoles.SHOP === req.user.role
          ? req.user.shopDetailsId
          : shopId;

      const pipeline = [
        {
          $match: {
            status: {
              $in: status,
            },
            shopId: new mongoose.Types.ObjectId(shopId),
            ...(![undefined, null, ''].includes(search) && {
              title: { $regex: search, $options: 'i' },
            }),
          },
        },
        {
          $lookup: {
            from: 'Category',
            localField: 'subCategoryId',
            foreignField: '_id',
            as: 'subCategory',
          },
        },
        {
          $project: {
            _id: 1,
            id: '_id',
            title: 1,
            description: 1,
            price: 1,
            image: 1,
            'subCategory.name': 1,
            'subCategory._id': 1,
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
      const resp = await CatalogueRepository.getAndCountAll(pipeline);
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  create: async (req, res) => {
    try {
      req.body.shopId = req.user.id;
      const { success, message, data } =
        await CatalogueRepository.createCatalogue(req.body);
      if (success) {
        return res.success({ message, data });
      } else {
        return res.preconditionFailed(message);
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  update: async (req, res) => {
    try {
      const { success, message, data } =
        await CatalogueRepository.updateCatalogue(req.params.id, req.body);
      if (success) {
        return res.success({ message, data });
      } else {
        return res.preconditionFailed(message);
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      let existing = await CatalogueRepository.findByCondition({
        _id: new mongoose.Types.ObjectId(req.params.id),
      });
      if (!existing) {
        let errors =
          MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The Catalogue');
        return res.unprocessableEntity(errors);
      }
      return res.success(existing);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  delete: async (req, res) => {
    try {
      let existingUser = await CatalogueRepository.findByCondition({
        _id: new mongoose.Types.ObjectId(req.params.id),
        status: { $ne: OPTIONS.defaultStatus.DELETED },
      });
      if (existingUser) {
        const { message } = await CatalogueRepository.patchStatus(
          existingUser,
          OPTIONS.defaultStatus.DELETED
        );
        res.success({ message });
      } else {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('User');
        return res.unprocessableEntity(errors);
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = catalogueObj;
