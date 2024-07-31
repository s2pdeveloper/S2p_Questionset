const MESSAGES = {
    resCode: {
      HTTP_OK: 200,
      HTTP_CREATE: 201,
      HTTP_NO_CONTENT: 204,
      HTTP_BAD_REQUEST: 400,
      HTTP_UNAUTHORIZED: 401,
      HTTP_FORBIDDEN: 403,
      HTTP_NOT_FOUND: 404,
      HTTP_METHOD_NOT_ALLOWED: 405,
      HTTP_CONFLICT: 409,
      HTTP_INTERNAL_SERVER_ERROR: 500,
      HTTP_SERVICE_UNAVAILABLE: 503,
    },
    errorTypes: {
      OAUTH_EXCEPTION: "OAuthException",
      ALREADY_AUTHENTICATED: "AlreadyAuthenticated",
      UNAUTHORISED_ACCESS: "UnAuthorisedAccess",
      INPUT_VALIDATION: "InputValidationException",
      ACCOUNT_ALREADY_EXIST: "AccountAlreadyExistException",
      ACCOUNT_DOES_NOT_EXIST: "AccountDoesNotExistException",
      ENTITY_NOT_FOUND: "EntityNotFound",
      ACCOUNT_BLOCKED: "AccountBlocked",
      ACCOUNT_DEACTIVATED: "AccountDeactivated",
      CONTENT_BLOCKED: "ContentBlocked",
      CONTENT_REMOVED: "ContentRemoved",
      PRIVATE_CONTENT: "PrivateContent",
      PRIVATE_ACCOUNT: "PrivateAccount",
      DUPLICATE_REQUEST: "DuplicateRequest",
      EMAIL_NOT_VERIFIED: "emailNotVerified",
      MOBILE_NUMBER_NOT_VERIFIED: "mobileNumberNotVerified",
      INTERNAL_SERVER_ERROR: "InternalServerError",
    },
    apiErrorStrings: {
      INVALID_REQUEST: "Invalid request",
      SERVER_ERROR: "Oops! something went wrong. Contact to server admin",
      EXAM_START: (dateTime) =>
        `Your exam will start at ${dateTime}. Please wait`,
      MOBILE_NUMBER_ALREADY_IN_USE:
        "The Mobile number is already in use. Please try again using a different Mobile number",
      USER_EXISTS: (data) => `User already exists with this same ${data}`,
      Data_EXISTS: (data) => `${data} is already exists.`,
      ALREADY_APPLIED: "You have already applied for this job!",
      ALREADY_ATTEMPT: "You have already attempt for this exam!",
      USER_DOES_NOT_EXIST: "The user does not exist!",
      PASSWORD_DOES_NOT_MATCH: "The password does not match.",
      OTP_SEND_FAILED: "OTP send failed!",
      OTP_INVALID: "Please enter a valid OTP.",
      OTP_EXPIRED: "The OTP is either invalid or has been expired",
      ACCOUNT_BLOCKED: "Your account has been blocked!",
      ACCOUNT_DEACTIVATED: "Your account has been deactivated!",
      USERNAME_ALREADY_IN_USE:
        "The username you have entered is already associated with an account.",
      USER_BLOCKED:
        "You're account has been blocked,if you think it's a mistake please contact admin.",
      ACTIVATE_ACCOUNT:
        "Please activate your account by clicking on the link sent to your registered email address",
      INVALID_CREDENTIALS: "The email and/or password entered are incorrect",
      INVALID_TOKEN: "Your email verification token is invalid or has expired",
      NO_ACTIVE_PLAN: "You have currently No Active Plan.",
    },
    apiSuccessStrings: {
      PASSWORD: (data) => `Your password has been ${data}`,
      PASSWORD_RESET: "Your password has been reset",
      PASSWORD_SEND: "Password has been shared to your registered email address",
      EMAIL_FORGOT: "Please check email for change password",
      LOGOUT_SUCCESS: "Logout successfully!",
      SIGNUP_SUCCESS: "User registered successfully!",
      OTP_SENT_SUCCESS: "OTP sent successfully!",
      OTP_VERIFIED: "OTP verified successfully",
      USERNAME_SUCCESS: "User Name available",
      USERNAME_CHANGE: "Your Username has been Changed as ",
      EMAIL_UPDATE: "Your profile email has been changed",
      SEND: (data) => `${data} send successfully`,
      ADDED: (data) => `${data} added successfully`,
      EXAM_STARTED: "Your Exam Starts Now!",
      QUESTION_NOT_FOUND: "Exam Coming Soon. Please wait !!",
      APPLY_NOTICE: "To Apply You Need Subscription Plan",
      UPLOAD: (data) => `${data} is uploaded successfully`,
      UPDATE: (data) => `${data} updated successfully`,
      STATUS_CHANGE: (data, status) =>
        `${data} status has been changed to ${status} successfully`,
      DELETED: (data) => `${data} has been deleted successfully`,
      DATA_ALREADY_EXISTS: (data) => `${data} already exists`,
      DATA_NOT_EXISTS: (data) => `${data} does not exists`,
      COURSES: (data) => `Courses are ${data}`,
      STATES: (data) => `States are ${data}`,
      IMAGES: (data) => `Images are ${data}`,
      TOPICS: (data) => `Topics are ${data}`,
      STOCK_CHANGE: (data) =>
        `Stock status has been changed to ${data} successfully`,
      EMPTY: (data) => `${data} List is empty`,
      Payment: (data) => `${data} Verify successfully`,
      Payment_Fail: (data) => `${data} Verify Fail`,
      Active_Plan: (data) => `${data} Currently Active`,
    },
    pushNotification: {
      REGISTER_TITLE: (name) =>
        `Congratulation and Welcome ${name}`,
      SUBSCRIPTION_EXPIRY_TITLE: `Your subscription is expiring soon`,
      SUBSCRIPTION_ALERT: `Get Paid Subscription services`,
      SUBSCRIPTION_PURCHASE: `Subscription Purchase`,
      USER_APPLIED_TITLE: "First step taken to get Job!",
      SUCCESS_REGISTER: (name) =>
        `Hi ${name},\nThanks for onboarding with Udhari Book App.`,
      SUBSCRIPTION_EXPIRY: (name) =>
        `Hi ${name},\nyour subscription is ending soon. Please  renew your subscription now.`,
      SUBSCRIPTION_ALERT_MSG: (name) =>
        `Hi ${name},\nyou have free subscription plan. Buy any  paid subscription plan to access premium jobs and get increase your chances to be hired by the company/Industry. Subscribe plan`,
      SUBSCRIPTION_PURCHASE_MSG: (name, planType) =>
        `Hi ${name},\nyou have successfully switch to ${planType} plan. \nThank You !!!`,
    },
  };
  
  module.exports = MESSAGES;
  