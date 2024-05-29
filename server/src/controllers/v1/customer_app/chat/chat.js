const Chat = require('../../../../models/ChatMessage');
const { Order } = require('../../../../models/Order');
const RequestBookingHelpers = require('../../../../models/helpers/OrderHelpers');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const ShopHelpers = require('../../../../models/helpers/ShopHelper');
const { Rating } = require('../../../../models/Rating');

const chatObj = {
  create: async (req, res) => {
    try {
      req.body.customerId = req?.user?.id || null;
      req.body.createdBy = req?.user?.id || null;
      req.body.updateBy = req?.user?.id || null;
      let orderDetails = {};
      if (req.body.roomName) {
        orderDetails = await Order.findOne({
          _id: req.body.roomName,
        });
      }
      if (Object.keys(orderDetails).length == 0) {
        orderDetails = await Order.create({
          ...req.body,
          title: 'order' + new Date().toISOString().split('T')[0],
          status: 'new',
        });
        req.body.orderId = orderDetails._id;
        req.body.roomName = orderDetails._id;
      } else {
        if (req.body.message == 'Confirm Order') {
          orderDetails.confirmByCustomer = true;
          if (orderDetails.confirmByShop) {
            orderDetails.status = 'COMPLETE';
          }
          orderDetails.save();
        }
      }
      await Chat.create(req.body);
      RequestBookingHelpers.sendCreateNotification(
        req.body,
        req.body.customerId
      ).then();
      return res.success({
        orderId: orderDetails._id,
        message: MESSAGES.apiSuccessStrings.ADDED('chat'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getMsgByCustomerId: async (req, res) => {
    try {
      let query = {
        // customerId: req.params.customerId,
        roomName: req.params.roomName,
      };
      let rows = await Chat.find(query).select(
        '_id message createdAt status image createdBy orderId'
      );
      if (!rows) {
        let errors =
          MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('The chat Details');
        return res.MESSAGES(errors);
      }
      let count = await Chat.countDocuments(query);
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

  orderRating: async (req, res) => {
    try {
      let orderRating = await Rating.find({ orderId: req.params.id });
      orderRating = orderRating[0];
      if (!orderRating) {
        orderRating = await Rating.create({
          shopId: req.body.shopId,
          customerId: req.body.customerId,
          orderId: req.params.id,
          quality: req.body.quality,
        });
      } else {
        orderRating.quality = req.body.quality;
        orderRating.save();
      }
      let query = {
        shopId: orderRating.shopId,
      };
      let total = await Rating.aggregate([
        { $match: query },
        {
          $group: {
            _id: '$shopId',
            total: { $avg: '$quality' },
          },
        },
      ]);
      ShopHelpers.updateShopRating(total[0].total, orderRating.shopId).then();
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('Rating'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = chatObj;
