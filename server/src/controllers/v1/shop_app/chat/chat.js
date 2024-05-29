const Chat = require('../../../../models/Chat');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const { Order } = require('../../../../models/Order');
const OPTIONS = require('../../../../config/Options');

const chatObj = {
  create: async (req, res) => {
    try {
      await Order.findOneAndUpdate(
        {
          _id: req.body.roomName,
          status: OPTIONS.orderStatus.NEW,
          orderStatus: req.body.orderStatus,
        },
        {
          status: OPTIONS.orderStatus.ACTIVE,
        }
      );
      req.body.orderId = req.body.roomName;
      req.body.createdBy = req?.user?.id || null;
      req.body.updateBy = req?.user?.id || null;
      await Chat.create(req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('chat'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  // to view msg
  getMsgByShopId: async (req, res) => {
    try {
      let query = {
        roomName: req.params.roomName,
      };
      let rows = await Chat.find(query).select(
        '_id message createdAt status image createdBy'
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
};
module.exports = chatObj;
