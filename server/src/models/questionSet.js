const mongoose = require('mongoose');
const questionSetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
     
    },
    noOfQuestion:{
     type:Number,
     required: true,
    },
    duration:{
      type:Number,
      required:true,
    },
    seminarId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seminar',
      required: true,
    },
    serialNumber: {
      type: Number,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default:false,
      
    },
    passingMarks: {
      type: String,
      required:true,
    },
    isClose:{
      type:Boolean,
      default:true,
      required:true,
    }
  },
  {
    timestamps: true,
    collection: 'Questionset',
  }
);
questionSetSchema.index({ '$**': 'text' });

const Questionset = mongoose.model('Questionset', questionSetSchema);

module.exports = Questionset;
