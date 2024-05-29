const mongoose = require('mongoose');
const questionSetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    seminarId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seminar',
      required: false,
    },
    sno: {
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
