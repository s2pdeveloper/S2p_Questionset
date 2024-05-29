const { ShopDetails } = require('../../../../models/ShopDetails');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
const UserRepository = require('../../../../models/repository/UserRepository');
const UserHelper = require('../../../../models/helpers/UserHelper');
const ShopHelper = require('../../../../models/helpers/ShopHelper');
const mongoose = require('mongoose');
const { generateCreateData } = OPTIONS;

const shopObj = {
  getAll: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
        status = [OPTIONS.defaultStatus.ACTIVE],
      } = req.query;
      const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);
      if (status && status !== 'all' && status !== 'null') {
        status =
          status && typeof status === 'string' ? status.split(',') : status;
      }
      const pipeline = [
        {
          $match: {
            status: {
              $in: status,
            },
            role: OPTIONS.usersRoles.SHOP,
            ...(![undefined, null, ''].includes(search) && {
              $text: { $search: search },
            }),
          },
        },
        {
          $lookup: {
            from: 'ShopDetails',
            localField: 'shopDetailsId',
            foreignField: '_id',
            as: 'shopDetails',
          },
        },
        {
          $unwind: '$shopDetails',
        },
        {
          $project: UserHelper.getUserAttributes({
            'shopDetails._id': 1,
            'shopDetails.shopName': 1,
            'shopDetails.address': 1,
            'shopDetails.bannerImages': 1,
            'shopDetails.businessTypeId': 1,
            'shopDetails.subCategoryId': 1,
            'shopDetails.bannerImages': {
              $concat: [
                `${process.env.CDN_WEB_STATIC}/`,
                '$shopDetails.bannerImages',
              ],
            },
            profilePicture: {
              $concat: [`${process.env.CDN_WEB_STATIC}/`, '$profilePicture'],
            },
          }),
        },
        { $sort: { [column]: direction } },
        {
          $facet: {
            metadata: [{ $count: 'total' }],
            data: [{ $skip: skip }, { $limit: parseInt(pageSize, 10) }],
          },
        },
      ];
      const resp = await UserRepository.getAndCountAll(pipeline);
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  getById: async (req, res) => {
    try {
      let existingData = await UserRepository.findUserWithShopByCondition(
        {
          _id: new mongoose.Types.ObjectId(req.params.id),
          status: { $ne: OPTIONS.defaultStatus.DELETED },
        },
        UserHelper.getUserAttributes({
          address: 1,
          profilePicture: {
            $concat: [`${process.env.CDN_WEB_STATIC}/`, '$profilePicture'],
          },
        })
      );
      existingData.shopDetails = existingData.shopDetailsId;
      existingData.shopDetails['subCategory'] =
        existingData.shopDetailsId.subCategoryId;
      if (existingData.shopDetailsId.businessTypeId) {
        existingData.shopDetails['businessType'] =
          existingData.shopDetailsId.businessTypeId;
        delete existingData.shopDetailsId.businessTypeId;
      }
      delete existingData.shopDetailsId;
      delete existingData.shopDetails.subCategoryId;
      if (!existingData) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The Shop');
        return res.unprocessableEntity(errors);
      }
      return res.success(existingData);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = shopObj;
