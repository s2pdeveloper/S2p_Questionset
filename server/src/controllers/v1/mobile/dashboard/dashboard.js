const { Order } = require('../../../../models/Order');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');

const orderObj = {
  getDashboardDetail: async (req, res) => {
    try {
      //for total order earning
      let query = {
        shopId: req.params.shopId,
        status: 'completed',
      };
      let totalEarning = await Order.find(query, { totalPrice: 1 });
      // let totalEarning = await Order.aggregate([
      //     { $match: query },
      //     {
      //         $group: {
      //             _id: "$shopId",
      //             totalPrice: { $sum: "$totalPrice" },
      //         },
      //     },
      // ]);
      // let statusCount = await Order.aggregate([
      //     {
      //         $group: {
      //             _id: "$status",
      //             count: { $sum: 1 },
      //         },
      //     },
      // ]);
      //for total order count
      let countQuery = {
        shopId: req.params.shopId,
      };
      let orderCount = await Order.countDocuments(countQuery);
      //for today order earning
      let todayQuery = {
        shopId: req.params.shopId,
        createdAt: { $gte: [new Date().toDateString()] },
        status: 'completed',
      };
      let todayOrder = await Order.find(todayQuery).select(' _id totalPrice');
      // let todayOrder = await Order.aggregate([
      //     { $match: query },
      //     {
      //         $group: {
      //             _id: null,
      //             totalPrice: { $sum: "$totalPrice" },
      //         },
      //     },
      // ]);
      //for today order count
      let orderQuery = {
        shopId: req.params.shopId,
        createdAt: { $gte: [new Date().toDateString()] },
      };
      let todayOrderCount = await Order.countDocuments(orderQuery);
      return res.success({
        totalEarning,
        orderCount,
        todayOrder,
        todayOrderCount,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getDashboardSegment: async (req, res) => {
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
        shopId: req.params.shopId,
        status: status,
        createdAt: { $gte: [new Date().toDateString()] },
      };
      let rows = await Order.find(query).populate(
        'customerId',
        '_id firstName lastName'
      );
      if (!rows) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS(
          'The dashboard Details'
        );
        return res.MESSAGES(errors);
      }
      let count = await Order.countDocuments(query);

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
