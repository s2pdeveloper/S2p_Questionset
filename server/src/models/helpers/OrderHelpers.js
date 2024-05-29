const { OPTIONS, generateCreateData } = require('../../config/Options');
const {
  createNotification,
} = require('../../shared/repositories/NotificationRepository');
const UserHelper = require('./UserHelper');

//** send request booking create notification from customer to shop */
exports.sendCreateNotification = async (payload, senderUser) => {
  let senderData = await UserHelper.userData(senderUser);
  let notificationData = {
    receiverId: payload.shopId,
    senderId: senderUser,
    message: OPTIONS.notificationMessage.NEW_ORDER_RECEIVED(
      `${senderData.name}`
    ),
    title: OPTIONS.notificationTitle.NEW_ORDER_RECEIVED,
    type: 'order',
    isSystemGenerated: true,
  };
  await createNotification(notificationData);
};



//** send request booking status update notification from shop to customer */
// exports.sendStatusUpdateNotification = async payload => {
//     let senderUser = await UserHelper.userData("shop", payload.shopId);
//     let receiverData = await UserHelper.userData("user", payload.userId);
//     let message = OPTIONS.notificationMessage.STATUS_ORDER(
//         `${receiverData.name}`,
//         payload.requestNumber,
//         payload.status
//     );
//     if (payload.status === OPTIONS.deliveryStatus.REJECTED) {
//         message = OPTIONS.notificationMessage.REJECTED_ORDER(`${receiverData.name}`, payload.requestNumber);
//     }
//     let notificationData = {
//         receiverId: receiverData.id,
//         senderId: senderUser.id,
//         message: message,
//         additional: {id: payload.id, orderNumber: payload.requestNumber},
//         title: OPTIONS.notificationTitle.STATUS_ORDER(payload.status),
//         type: OPTIONS.notificationType.ORDER,
//         isSystemGenerated: true,
//     };
//     await createNotification(notificationData);
// };
//** send request booking delivery status update notification from shop to customer */
// exports.sendDeliveryStatusUpdateNotification = async payload => {
//     let senderUser = await UserHelper.userData("shop", payload.shopId);
//     let receiverData = await UserHelper.userData("user", payload.userId);
//     let message = OPTIONS.notificationMessage.STATUS_ORDER(
//         `${receiverData.name}`,
//         payload.requestNumber,
//         payload.deliveryStatus
//     );
//     if (payload.deliveryStatus === OPTIONS.deliveryStatus.DELIVERED) {
//         message = OPTIONS.notificationMessage.DELIVERY_ORDER(`${receiverData.name}`, payload.requestNumber);
//     }
//     let notificationData = {
//         receiverId: receiverData.id,
//         senderId: senderUser.id,
//         message: message,
//         additional: {id: payload.id, orderNumber: payload.requestNumber},
//         title: OPTIONS.notificationTitle.STATUS_ORDER('ready'),
//         type: OPTIONS.notificationType.ORDER,
//         isSystemGenerated: true,
//     };
//     await createNotification(notificationData);
// };
