const SocketHelper = require('../models/helpers/SocketHelper');
const SocketController = require('../controllers/v1/socket');

module.exports = (io) => {
  // Socket Middleware to handle security
  io.use(async (socket, next) => {
    console.log('socket.handshake', socket.handshake);
    if (socket.handshake.auth && socket.handshake.auth.token) {
      try {
        await SocketHelper.auth(socket);
        next();
      } catch (e) {
        next(new Error('Authentication error'));
      }
    } else {
      next(new Error('Authentication error'));
    }
  });

  // Connection event ?token=
  io.on('connection', async (socket) => {
    await SocketController.handleConnection(socket);

    if (process.env.NODE_ENV === 'dev') {
      socket.emit('welcome', socket.user);
    }

    // Confirm connection
    socket.on('ping_me', (data) => {
      socket.emit('pong', 'Hello from server..', data);
    });

    // Business Logic Events
    await SocketController.register(socket, io);

    socket.on('disconnect', async () => {
      // Handle disconnection
      await SocketController.handleDisconnect(socket);
    });
  });
};
