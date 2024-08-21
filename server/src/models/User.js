const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtOptions = require('../config/JwtOptions');
const OPTIONS = require('../config/Options');
// const { usersRoles, defaultStatus } = OPTIONS;
const {
  defaultStatus,
  generateCloudFrontUrl,
  usersRoles,
} = require('../config/Options');
const UserSchema = mongoose.Schema(
  {
    college: {
      type: String,
      required: false,
    },
    degree: {
      type: String,
      required: false,
    },
    branch: {
      type: String,
      required: false,
    },
    otp: {
      type: Number,
    },
    semester: {
      type: String,
      required: false,
    },
    isDelete: {
      type: Boolean,
      required: false,
      default: 0,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
      unique: true,
    },

    emailVerified: {
      type: Boolean,
      default: 0,
    },
    phoneVerified: {
      type: Boolean,
      default: 0,
    },
    userImage: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      enum: defaultStatus.getAllStatusAsArray(),
      default: defaultStatus.ACTIVE,
    },
    createdBy: {
      type: String,
      required: false,
    },
    modifiedBy: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      default: usersRoles.USER,
      enum: usersRoles.getAllRolesAsArray(),
    },
    resetPasswordOTP: {
      type: String,
      default: null,
    },
  },

  {
    collection: 'User',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
UserSchema.index({ '$**': 'text' });

// Virtual for user's full name
UserSchema.virtual('fullName').get(function () {
  return `${this.firstName ?? ''} ${this.lastName ?? ''}`;
});

UserSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

UserSchema.methods.genToken = function () {
  const payload = { id: this._id };
  return jwt.sign(payload, jwtOptions.secretOrKey, {
    expiresIn: jwtOptions.expiry,
  });
};
UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8));
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
