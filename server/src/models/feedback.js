const mongoose = require('mongoose');
const feedbackSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    }, 
    seminarId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seminar',
      required: false,
    },
    type: {
      type: String,
      enum: ['MCQ', 'TEXT', 'NUMBER'],
    },
    options: [],
    queImageUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: 'Feedback',
  }
);
feedbackSchema.index({ '$**': 'text' });

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
