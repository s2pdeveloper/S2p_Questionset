const mongoose = require('mongoose');

const seminarySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    college: {
      type: String,
      required: false,
    },
    dateOfSeminar: {
      type: Date,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    QuestionSet:[]
  },
  {
    timestamps: true,
    collection: 'Seminar',
  }
);
seminarySchema.index({ '$**': 'Seminar' });
const Seminar = mongoose.model('Seminar', seminarySchema);
module.exports = Seminar;
