const mongoose = require('mongoose');
const tagSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }, 
   
 
  },
  {
    timestamps: true,
    collection: 'Tag',
  }
);
tagSchema.index({ '$**': 'text' });

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
