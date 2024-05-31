const mongoose = require('mongoose');
const questionSetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    noOfQuestion:{
     type:Number,
    },
    duration:{
      type:Number,
    },
    seminarId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seminar',
      required: false,
    },
    serialNumber: {
      type: String,
      required: false,
    },
    isVisible: {
      type: Boolean,
      required: false,
    },
    passingMarks: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: 'Questionset',
  }
);
questionSetSchema.index({ '$**': 'text' });

const Questionset = mongoose.model('Questionset', questionSetSchema);

module.exports = Questionset;
