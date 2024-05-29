const mongoose = require('mongoose');
const { defaultStatus } = require('../config/Options');

const user_addressSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    isDelete: {
      type: String,
      required: false,
      enum: defaultStatus.getAllStatusAsArray(),
      default: defaultStatus.ACTIVE,
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Address',
    },

    isDefault: {
      type: Boolean,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: 'User_address',
  }
);
user_addressSchema.index({ '$**': 'text' });

const User_address = mongoose.model('User_address', user_addressSchema);

module.exports = User_address;
