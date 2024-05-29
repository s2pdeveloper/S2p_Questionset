const mongoose = require('mongoose');
const { defaultStatus, generateCloudFrontUrl } = require('../config/Options');

const SeasonalOfferMediaSchema = mongoose.Schema(
    {
        image: {
          type: String,
          required: false,
          get: (image) => {
            console.log(image)
            if (image && image.length > 0) {
              return generateCloudFrontUrl(image);
            }
            return null;
          },
          set: (image) => {
            if (image) {
              return `post/${image.split('post/')[1]}`;
            }
            return null;
          },
        },
        title: {
          type: String,
          required: false,
        },
  },
  {
    collection: 'SeasonalOfferMedia',
    timestamps: false,
    toJSON: { getters: true, virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
const SeasonalOfferMedia = mongoose.model('SeasonalOfferMedia', SeasonalOfferMediaSchema);

exports.SeasonalOfferMedia = SeasonalOfferMedia;
