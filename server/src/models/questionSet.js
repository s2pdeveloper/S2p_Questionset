const mongoose = require('mongoose');
const questionSetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    type: {
      type: Boolean,
      required: false,
      default: 0,
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
    isvisible: {
      type: Boolean,
      required: false,
    },
    passingMarks: {
      type: String,
      required: false,
    },
    Querstion: [],
  },
  {
    timestamps: true,
    collection: 'Questionset',
  }
);
questionSetSchema.index({ '$**': 'text' });

const Questionset = mongoose.model('Questionset', questionSetSchema);

module.exports = Questionset;
