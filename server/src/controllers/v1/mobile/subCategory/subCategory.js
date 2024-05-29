// const mongoose = require('mongoose');
// const MESSAGES = require('../../../../models/helpers/MessagesHelper');
// const CategoryRepository = require('../../../../models/repository/CategoryRepository');
// const { defaultStatus } = require('../../../../config/Options');

// const subCategoryObj = {
//   getAllSubCategory: async (req, res) => {
//     try {
//       const {
//         page = 1,
//         pageSize = 10,
//         search = null,
//         column = 'createdAt',
//         direction = -1,
//         parentId = null,
//       } = req.query;
//       const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);
//       const matchQuery = {
//         status: {
//           $in: [defaultStatus.ACTIVE],
//         },
//         parentId: parentId
//           ? new mongoose.Types.ObjectId(parentId)
//           : { $ne: null },
//         ...(![undefined, null, ''].includes(search) && {
//           name: { $regex: search, $options: 'i' },
//         }),
//       };
//       const pipeline = [
//         {
//           $match: matchQuery,
//         },
//         {
//           $project: {
//             _id: 1,
//             id: '_id',
//             name: 1,
//             image: {
//               $concat: [`${process.env.CDN_WEB_STATIC}/`, '$image'],
//             },
//           },
//         },
//         { $sort: { [column]: direction } },
//         {
//           $facet: {
//             metadata: [{ $count: 'total' }],
//             data: [{ $skip: skip }, { $limit: parseInt(pageSize, 10) }],
//           },
//         },
//       ];
//       const resp = await CategoryRepository.getAndCountAll(pipeline);
//       return res.success(resp);
//     } catch (e) {
//       const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
//       res.serverError(errors);
//       throw new Error(e);
//     }
//   },
// };
// module.exports = subCategoryObj;
