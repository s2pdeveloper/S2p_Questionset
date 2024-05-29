const { SeasonalOffer } = require('../../../../models/SeasonalOffer');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const SeasonalOffersRepository = require('../../../../models/repository/SeasonalOffersRepository');
const SeasonalOfferHelpers = require('../../../../models/helpers/SeasonalOfferHelpers');
const { defaultStatus } = require('../../../../config/Options');

const seasonalOfferObj = {
  getAll: async (req, res) => {
    try {
      let query = {
        status: defaultStatus.ACTIVE,
        // $and: [
        //     {
        //         startDate: {
        //             $lte: new Date(),
        //         },

        //     }, {
        //         endDate: {
        //             $gte: new Date(),
        //         },
        //     }
        // ]
      };
      let dataList = await SeasonalOffersRepository.findAllWithMedia(
        query,
        SeasonalOfferHelpers.getSeasonalOfferAttributes()
      );
      return res.success(dataList);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = seasonalOfferObj;
