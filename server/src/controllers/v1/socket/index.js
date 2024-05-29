const { onlineStatus } = require('../../../config/Options');
const {
  customErrorLogger,
} = require('../../../models/helpers/ErrorHandleHelper');
const {
  updateOnlineStatus,
} = require('../../../models/repository/UserRepository');
const { order } = require('./order');

exports.register = async (socket, io) => {
  await order(socket, io);
};
exports.handleConnection = async (socket) => {
  try {
    if (socket.user) {
      console.log(`CONNECTED, User ${socket.user.id}`);
      await updateOnlineStatus(socket.user.id, onlineStatus.AVAILABLE);
    }
  } catch (e) {
    customErrorLogger(e);
  }
};
exports.handleDisconnect = async (socket) => {
  try {
    if (socket.user) {
      console.log(`DISCONNECTED, User ${socket.user.id}`);
      await updateOnlineStatus(socket.user.id, onlineStatus.UN_AVAILABLE);
    }
  } catch (e) {
    customErrorLogger(e);
  }
};
