const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const FavoritesRepository = require('../../../../models/repository/FavoritesRepository');
const resCode = MESSAGES.resCode;

const favoriteObj = {
  create: async (req, res) => {
    try {
      let response = await FavoritesRepository.createAnUpdate(
        req.body,
        req.user.id
      );
      return res.success(response);
    } catch (e) {
      res.status(resCode.HTTP_INTERNAL_SERVER_ERROR);
      throw new Error(e);
    }
  },
};
module.exports = favoriteObj;
