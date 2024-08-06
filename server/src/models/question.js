const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: false,
    },
    questionText: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      enum: ['MCQ', 'TEXT', 'NUMBER'],
    },
    hint: {
      type: String,
      default: null,
    },
    questionSetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Questionset',
      required: false,
    },
    options: [],
    correctOption: {
      type: String,
    },
    questionType: {
      type: String,
      enum: ['TEXT', 'IMAGE'],
      default: 'TEXT',
    },
    queImageUrl: {
      type: String,
      required: false,

    },
  },
  {
    timestamps: true,
    collection: 'Question',
  }
);

QuestionSchema.index({ '$**': 'text' });
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
