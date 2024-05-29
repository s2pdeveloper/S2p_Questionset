const { Offer } = require('../../../../models/Offer');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OfferRepository = require('../../../../models/repository/OfferRepository');
const OfferHelper = require('../../../../models/helpers/OfferHelper');
const { defaultStatus } = require('../../../../config/Options');

const offerObj = {
  getAll: async (req, res) => {
    try {
      let query = {
        status: defaultStatus.ACTIVE,
        $and: [
          {
            startDate: {
              $lte: new Date(),
            },

          }, {
            endDate: {
              $gte: new Date(),
            },
          }
        ]
      };
      let dataList = await OfferRepository.findAll(
        query,
        OfferHelper.getOfferAttributes()
      );
      return res.success(dataList);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = offerObj;
