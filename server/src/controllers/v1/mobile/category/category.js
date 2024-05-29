const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const CategoryRepository = require('../../../../models/repository/CategoryRepository');
const { defaultStatus } = require('../../../../config/Options');

const categoryObj = {
  getAllParentCategory: async (req, res) => {
    try {
      const {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;
      let query = {
        status: defaultStatus.ACTIVE,
        parentId: null,
        ...(![undefined, null, ''].includes(search) && {
          name: { $regex: search, $options: 'i' },
        }),
      };
      let dataList = await CategoryRepository.findAll(query, {
        _id: 1,
        id: '_id',
        name: 1,
        image: 1,
      },
        { $sort: { [column]: direction } });
      return res.success(dataList);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};
module.exports = categoryObj;
