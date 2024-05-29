const app = require('express')();

const AuthHelper = require('../../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../../config/Options');

const user = require('./user');

app.post('/send-mobile-otp', user.sendMobileOtp);
app.post('/signup', user.create);
app.patch('/verify-mobile-otp', user.verifyMobileOtp);

app.get(
  '/profile',
  AuthHelper.authenticateJWT([usersRoles.SHOP, usersRoles.CUSTOMER]),
  user.getProfile
);

app.put(
  '/update',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER, usersRoles.SHOP]),
  user.updateProfile
);

app.post('/send-token', user.sendToken);

app.post('/verify-token', user.verifyToken);

app.post(
  '/set-fcm-token',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER, usersRoles.SHOP]),
  user.setUserFcmToken
);
app.put(
  '/clear-fcm-token',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER, usersRoles.SHOP]),
  user.clearUserFcmToken
);
module.exports = app;
