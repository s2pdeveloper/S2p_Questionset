const { Order } = require('../../../../models/Order');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../helpers/global.options');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const orderObj = {
  getById: async (req, res) => {
    try {
      let existing = await Order.findOne({
        _id: req.params.id,
      }).select(
        '_id totalPrice createdAt customerId shopId status orderStatus'
      );
      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The order');
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
      let itemDetails = await Order.findOne({
        _id: req.params.id,
      });
      if (!itemDetails) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The order');
        return res.unprocessableEntity(errors);
      } else {
        if (req.body.totalPrice) {
          itemDetails.totalPrice = req.body.totalPrice;
          itemDetails.status = OPTIONS.orderStatus.COMPLETED;
          itemDetails.orderStatus = '';
          itemDetails.confirmByShop = req.body.confirmByShop;
        } else {
          // req.body.status = OPTIONS.orderStatus.COMPLETED;
          itemDetails.status = req.body.status ? req.body.status : 'active';
          itemDetails.orderStatus = req.body.orderStatus
            ? req.body.orderStatus
            : itemDetails.orderStatus;
          // itemDetails = await generateCreateData(itemDetails, req.body);
        }
        await itemDetails.save();

        return res.success({
          message: MESSAGES.apiSuccessStrings.UPDATE('The order'),
        });
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  // customer list in chat
  getChatCustomerByShopId: async (req, res) => {
    try {
      const {
        page = 1,
        pageSize = 10,
        search = null,
        status = null,
        column = 'createdAt',
        direction = null,
      } = req.query;
      skip = Math.max(0, page - 1) * pageSize;
      let query = {
        shopId: ObjectId(req.user.sub),
        status: status,
      };
      let rows = await Order.aggregate([
        { $match: query },
        { $skip: +skip },
        { $limit: +pageSize },
        {
          $lookup: {
            from: 'customer',
            localField: 'customerId',
            foreignField: '_id',
            as: 'customerId',
          },
        },
        { $sort: { [column]: parseInt(direction) } },
        {
          $unwind: '$customerId',
        },
        {
          $project: {
            _id: 1,
            'customerId._id': 1,
            'customerId.firstName': 1,
            'customerId.lastName': 1,
            'customerId.image': 1,
            'customerId.fullName': 1,
            createdAt: 1,
            totalPrice: 1,
            status: 1,
            orderStatus: 1,
          },
        },
        {
          $match: {
            ...(![undefined, null, ''].includes(search) && {
              $or: [
                { 'customerId.fullName': { $regex: search, $options: 'i' } },
                { 'customerId.firstName': { $regex: search, $options: 'i' } },
                { 'customerId.lastName': { $regex: search, $options: 'i' } },
              ],
            }),
          },
        },
      ]);

      // let statusCount = await Order.aggregate([
      //     { $match: query },
      //     {
      //         $group: {
      //             _id: {
      //                 // "shopId": ObjectId(req.user.sub),
      //                 "status": "$status",
      //             },
      //             count: { $sum: 1 }
      //         },
      //     },
      // ]);
      let count = await Order.countDocuments(query);
      if (!rows) {
        let errors =
          MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The chat Details');
        return res.MESSAGES(errors);
      }
      return res.success({
        rows,
        count,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getOrderCountByShopId: async (req, res) => {
    try {
      let query = {
        shopId: ObjectId(req.user.sub),
      };
      let statusCount = await Order.aggregate([
        { $match: query },
        {
          $group: {
            _id: {
              status: '$status',
            },
            count: { $sum: 1 },
          },
        },
      ]);
      return res.success(statusCount);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = orderObj;
