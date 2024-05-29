const { Advertise } = require('../../../../models/Advertise');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const { defaultStatus } = require('../../../../config/Options');
const AdvertiseRepository = require('../../../../models/repository/AdvertiseRepository');
const AdvertiseHelper = require('../../../../models/helpers/AdvertiseHelper');

const advertiseObj = {
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
      let advertise = await AdvertiseRepository.findAllAdvertise(
        query,
        AdvertiseHelper.getAdvertiseAttributes()
      );
      return res.success(advertise);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = advertiseObj;
