const {
  socketOnEvents,
  socketEmitEvents,
  socketPrivateGroups,
  orderStatus,
  defaultStatus,
  usersRoles,
} = require('../../../config/Options');
const {
  customErrorLogger,
} = require('../../../models/helpers/ErrorHandleHelper');
const OrderRepository = require('../../../models/repository/OrderRepository');
const ChatMessageRepository = require('../../../models/repository/ChatMessageRepository');
const UserRepository = require('../../../models/repository/UserRepository');
const { default: mongoose } = require('mongoose');

const getOrders = async (data) => {
  try {
    const {
      page = 1,
      pageSize = 10,
      search = null,
      column = 'createdAt',
      direction = -1,
      status = orderStatus.getAllOrderStatusAsArray(),
      id = null,
      role = usersRoles.CUSTOMER,
    } = data;
    const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);
    const pipeline = [
      {
        $match: {
          status: {
            $in: status,
          },
          ...(![undefined, null, ''].includes(search) && {
            $text: { $search: search },
          }),
          ...(role === usersRoles.CUSTOMER && {
            customerId: mongoose.Types.ObjectId(id),
          }),
          ...(role === usersRoles.SHOP && {
            shopId: mongoose.Types.ObjectId(id),
          }),
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'customerId',
          foreignField: '_id',
          as: 'customer',
        },
      },
      {
        $lookup: {
          from: 'ChatMessage',
          localField: 'lastMessageId',
          foreignField: '_id',
          as: 'chatMessage',
        },
      },
      {
        $project: {
          _id: 1,
          id: '_id',
          orderNumber: 1,
          status: 1,
          secondaryStatus: 1,
          createdAt: 1,
          lastMessageId: 1,
          customerId: 1,
          'customer.firstName': 1,
          'customer.lastName': 1,
          'chatMessage.message': 1,
          'chatMessage.image': 1,
          'chatMessage.createdAt': 1,
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
    return await OrderRepository.getAndCountAll(pipeline);
  } catch (error) {
    customErrorLogger(error);
  }
};

const sendMessage = async (payload, senderId) => {
  const {
    data: { chatMessage, order },
    message,
  } = await ChatMessageRepository.sendMessage({
    orderId: payload.orderId,
    message: payload.description,
    senderId: senderId,
  });
  const room = `${socketPrivateGroups.PRIVATE_ROOM}_${chatMessage.id}`;
  io.in(room).emit(socketEmitEvents.RECEIVE_MESSAGE, {
    chatMessage,
    message,
  });
  let userList = await UserRepository.findAll(
    {
      shopId: mongoose.Types.ObjectId(order.shopId),
      status: defaultStatus.ACTIVE,
    },
    {
      _id: 1,
      id: '_id',
      firstName: 1,
      lastName: 1,
      email: 1,
      mobileNumber: 1,
      countryCode: 1,
      role: 1,
    }
  );
  userList.push({ role: usersRoles.CUSTOMER, id: order.customerId });
  userList.map(async (user) => {
    const orderList = await getOrders(user);
    io.to(`${socketPrivateGroups.PRIVATE_ORDER_LIST}_${user.id}`).emit(
      socketOnEvents.LIST_ORDER,
      {
        data: orderList,
      }
    );
  });
};
exports.order = (socket, io) => {
  socket.on(socketOnEvents.LIST_ORDER, async (data) => {
    const room = `${socketPrivateGroups.PRIVATE_ORDER_LIST}_${socket.user.id}`;
    socket.join(room);
    data['role'] = socket.user.role;
    data['id'] = socket.user.id;
    const orderList = await getOrders(data);
    io.to(room).emit(socketOnEvents.LIST_ORDER, { data: orderList });
  });
  socket.on(socketOnEvents.CREATE_ORDER, async (data) => {
    const { order, message } = await OrderRepository.createOrder(
      data,
      socket.user.id
    );
    io.emit(socketOnEvents.CREATE_ORDER, { order, message });
    await sendMessage(
      { orderId: order.id, description: order.description },
      socket.user.id
    );
  });
  socket.on(socketOnEvents.LIST_MESSAGE, async (data) => {
    const {
      page = 1,
      pageSize = 10,
      column = 'createdAt',
      direction = -1,
      orderId = null,
    } = data;
    const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);
    const room = `${socketPrivateGroups.PRIVATE_ROOM}_${orderId}`;
    socket.join(room);
    const pipeline = [
      {
        $match: {
          status: {
            $in: defaultStatus.ACTIVE,
          },
          orderId: new mongoose.Types.ObjectId(orderId),
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'senderId',
          foreignField: '_id',
          as: 'sender',
        },
      },
      {
        $project: {
          _id: 1,
          id: '_id',
          message: 1,
          createdAt: 1,
          image: 1,
          senderId: 1,
          'sender._id': 1,
          'sender.firstName': 1,
          'sender.lastName': 1,
          'sender.role': 1,
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
    const chatList = await ChatMessageRepository.getAndCountAll(pipeline);
    io.to(room).emit(socketOnEvents.LIST_MESSAGE, { data: chatList });
  });
  socket.on(socketOnEvents.SEND_MESSAGE, async (data) => {
    await sendMessage(data, socket.user.id);
  });
};
