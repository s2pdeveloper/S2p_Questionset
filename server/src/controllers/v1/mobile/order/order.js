const { Order } = require('../../../../models/Order');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const orderObj = {
  update: async (req, res) => {
    try {
      let itemDetails = await Order.findOne({
        _id: req.params.id,
      });
      if (!itemDetails) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The order');
        return res.unprocessableEntity(errors);
      } else {
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (itemDetails.confirmByCustomer) {
          itemDetails.status = OPTIONS.orderStatus.COMPLETED;
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

  // shop list by orderId in chat
  getChatShopByCustomerId: async (req, res) => {
    try {
      const {
        page = 1,
        pageSize = 10,
        search = null,
        status = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;
      skip = Math.max(0, page - 1) * pageSize;
      let query = {
        customerId: ObjectId(req.user.sub),
        status: status,
      };
      let rows = await Order.aggregate([
        { $match: query },
        { $skip: +skip },
        { $limit: +pageSize },
        {
          $lookup: {
            from: 'shop_user',
            localField: 'shopId',
            foreignField: '_id',
            as: 'shopId',
          },
        },
        { $sort: { [column]: direction } },
        // { $sort: { [column]: parseInt(direction) } },
        {
          $unwind: '$shopId',
        },
        {
          $project: {
            _id: 1,
            'shopId._id': 1,
            'shopId.firstName': 1,
            'shopId.lastName': 1,
            'shopId.image': 1,
            'shopId.shopName': 1,
            createdAt: 1,
            status: 1,
            orderStatus: 1,
          },
        },
        {
          $match: {
            ...(![undefined, null, ''].includes(search) && {
              $or: [{ 'shopId.shopName': { $regex: search, $options: 'i' } }],
            }),
          },
        },
      ]);
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
};
module.exports = orderObj;
