const UserHelper = require('../../../../models/helpers/UserHelper');
const UserRepository = require('../../../../models/repository/UserRepository');
const UserDeviceTokenRepository = require('../../../../models/repository/UserDeviceTokenRepository');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const {
  OPTIONS,
  usersRoles,
  defaultStatus,
} = require('../../../../config/Options');
const { User } = require('../../../../models/User');
const { log } = require('handlebars');

const userObj = {
  //** create a new user */
  create: async (req, res) => {
    try {
      let { success, message, data } = await UserRepository.checkAndCreate(
        req.body,
        false
      );
      if (success) {
        return res.success({ message, data });
      } else {
        return res.badRequest(message);
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  // ** send otp for login */
  sendMobileOtp: async (req, res) => {
    try {
      let existingUser = await UserRepository.findUserByCondition(
        {
          status: { $ne: defaultStatus.DELETED },
          mobileNumber: req.body.mobileNumber,
          role: req.body.role,
        },
        UserHelper.getUserAttributes({ tempOtp: 1, tempOtpExpiresAt: 1 })
      );
      if (existingUser) {
        if (existingUser.status === defaultStatus.INACTIVE) {
          let errors = MESSAGES.apiErrorStrings.ACCOUNT_BLOCKED;
          return res.badRequest({
            message: errors,
          });
        }
        await UserRepository.generateAndSendOtp(existingUser);
        return res.success({
          existingUser,
          message: MESSAGES.apiSuccessStrings.OTP_SENT_SUCCESS,
        });
      } else {
        return res.badRequest({
          message: MESSAGES.apiErrorStrings.USER_NOT_EXISTS('mobile number'),
        });
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  // ** verify mobile otp */
  verifyMobileOtp: async (req, res) => {
    try {
      let existingUser = await UserRepository.findUserByCondition(
        {
          status: { $ne: defaultStatus.DELETED },
          // mobileNumber: req.body.mobileNumber,
          // tempOtp: req.body.otp,
          // tempOtpExpiresAt: { $gte: new Date() },
        },
        UserHelper.getUserAttributes({
          tempOtp: 1,
          tempOtpExpiresAt: 1,
          shopDetailsId: 1,
        })
      );
      if (existingUser) {
        existingUser = await UserRepository.checkAndVerifyOtp(existingUser);
        let payload = UserHelper.modifyOutputData(existingUser);
        return res.success({
          message: MESSAGES.apiSuccessStrings.OTP_VERIFIED,
          data: payload,
        });
      } else {
        return res.badRequest({
          message: MESSAGES.apiErrorStrings.OTP_EXPIRED,
        });
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  //** get user profile */
  getProfile: async (req, res) => {
    try {
      let existingUser = await User.findOne(
        {
          _id: req.user.id,
        },
        UserHelper.getUserAttributes({
          isMobileNumberVerified: 1,
          isEmailVerified: 1,
          token: 1,
        })
      );
      if (existingUser) {
        return res.success(UserHelper.modifyOutputData(existingUser));
      } else {
        const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
        return res.preconditionFailed(error);
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  //** update the user profile */
  updateProfile: async (req, res) => {
    try {
      let { success, message, data } = await UserRepository.checkAndUpdate(
        req.user.id,
        req.body
      );
      if (!success) {
        return res.preconditionFailed(message);
      }
      return res.success({
        message,
        data,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  //** send token  */
  sendToken: async (req, res) => {
    try {
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  //** verify the token */
  verifyToken: async (req, res) => {
    try {
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  //** set FCM token */
  setUserFcmToken: async (req, res) => {
    try {
      await UserDeviceTokenRepository.setToken(req.user.id, req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('FCM token'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  //** clear FCM token */
  clearUserFcmToken: async (req, res) => {
    try {
      await UserDeviceTokenRepository.clearToken(req.user.id, req.body);
      return res.success({
        message: MESSAGES.apiSuccessStrings.REMOVED('FCM token'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = userObj;
