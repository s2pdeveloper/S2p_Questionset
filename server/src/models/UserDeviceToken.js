const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserDeviceSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: false,
    },
    token: {
      type: String,
      allowNull: true,
    },
    platform: {
      type: String,
      allowNull: true,
    },
  },
  {
    collection: 'UserDeviceToken',
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
UserDeviceSchema.index({ '$**': 'text' });

const UserDeviceToken = mongoose.model('UserDeviceToken', UserDeviceSchema);

exports.UserDeviceToken = UserDeviceToken;
