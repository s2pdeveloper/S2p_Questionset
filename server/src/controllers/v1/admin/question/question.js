const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../../config/Options');
// const OrdersRepository = require('../../../../models/repository/OrderRepository');
const mongoose = require('mongoose');
const { generateCreateData } = OPTIONS;
const  Question  = require('../../../../models/question');
const { User } = require('../../../../models/User');
const questionsetOjbect = {
  // getAll: async (req, res) => {
  //   // try {
  //     // let {
  //     //   page = 1,
  //     //   pageSize = 10,
  //     //   search = null,
  //     //   column = 'createdAt',
  //     //   direction = -1,
  //     // } = req.query;
  //     // const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);

  //     // const pipeline = [
  //     //   {
  //     //     $match: {
  //     //       ...(![undefined, null, ''].includes(search) && {
  //     //         $text: { $search: search },
  //     //       }),
  //     //     },
  //     //   },
  //       // {
  //       //   $unwind: '$productDetails',
  //       // },
  //       // {
  //       //   $lookup: {
  //       //     from: 'Product',
  //       //     localField: 'productDetails.productId',
  //       //     foreignField: '_id',
  //       //     as: 'productDetails.productInfo',
  //       //   },
  //       // },
  //       // {
  //       //   $unwind: '$productDetails.productInfo',
  //       // },
  //       // {
  //       //   $lookup: {
  //       //     from: 'ProductImage',
  //       //     localField: 'productDetails.productInfo._id',
  //       //     foreignField: 'productId',
  //       //     as: 'productDetails.productInfo.productImages',
  //       //     pipeline: [
  //       //       {
  //       //         $project: {
  //       //           _id: 1,
  //       //           productId: 1,
  //       //           isBanner: 1,
  //       //           image: {
  //       //             $concat: [process.env.IMAGE_PATH, '/product/', '$image'],
  //       //           },
  //       //         },
  //       //       },
  //       //     ],
  //       //   },
  //       // },
  //       // {
  //       //   $lookup: {
  //       //     from: 'User_address',
  //       //     localField: 'userAddressId',
  //       //     foreignField: '_id',
  //       //     as: 'userAddress',
  //       //   },
  //       // },
  //       // {
  //       //   $unwind: '$userAddress',
  //       // },
  //       // {
  //       //   $lookup: {
  //       //     from: 'User',
  //       //     localField: 'customerId',
  //       //     foreignField: '_id',
  //       //     as: 'customerDetails',
  //       //   },
  //       // },
  //       // {
  //       //   $unwind: '$customerDetails',
  //       // },
  //       // {
  //       //   $group: {
  //       //     _id: '$_id',
  //       //     customerDetails: { $first: '$customerDetails' },
  //       //     status: { $first: '$status' },
  //       //     createdAt: { $first: '$createdAt' },
  //       //     updatedAt: { $first: '$updatedAt' },
  //       //     trackURL: { $first: '$trackURL' },
  //       //     COD: { $first: '$COD' },
  //       //     subTotal: { $first: '$subTotal' },
  //       //     shippingCharges: { $first: '$shippingCharges' },
  //       //     totalAmount: { $first: '$totalAmount' },
  //       //     orderNumber: { $first: '$orderNumber' },
  //       //     productDetails: {
  //       //       $push: '$productDetails.productInfo',
  //       //     },
  //       //   },
  //       // },
  //   //     { $sort: { [column]: direction } },
  //   //     {
  //   //       $facet: {
  //   //         metadata: [{ $count: 'total' }],
  //   //         data: [{ $skip: skip }, { $limit: parseInt(pageSize, 10) }],
  //   //       },
  //   //     },
  //   //   ];
  //   //   const resp = await User.aggregate(pipeline);
  //   //   return res.success(resp);
  //   // } catch (e) {
  //   //   const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
  //   //   res.serverError(errors);
  //   //   throw new Error(e);
  //   // }



  //   try {
  //     let {
  //       page = 1,
  //       pageSize = 10,
  //       search = null,
  //       column = 'createdAt',
  //       direction = -1,
  //     } = req.query;
      
  //     page = parseInt(page, 10);
  //     pageSize = parseInt(pageSize, 10);
  //     direction = parseInt(direction, 10);
      
  //     const skip = Math.max(0, page - 1) * pageSize;
  
  //     const matchStage = {
  //       $match: {
  //         ...(![undefined, null, ''].includes(search) && {
  //           $text: { $search: search },
  //         }),
  //       },
  //     };
  
  //     const sortStage = { $sort: { [column]: direction } };
  
  //     const facetStage = {
  //       $facet: {
  //         metadata: [{ $count: 'total' }],
  //         data: [{ $skip: skip }, { $limit: pageSize }],
  //       },
  //     };
  
  //     const pipeline = [matchStage, sortStage, facetStage];
  
  //     const resp = await Question.aggregate(pipeline);
  
  //     return res.success(resp);
  //   } catch (e) {
  //     const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
  //     res.serverError(errors);
  //     throw new Error(e);
  //   }

  // },

  // create: async (req, res) => {
  //   try {
  //     const DATA = req.body;

  //     const seminar = await Question.create(DATA);

  //     return res.success({
  //       message: MESSAGES.apiSuccessStrings.ADDED('Question'),
  //       seminary: seminar,
  //     });
  //   } catch (e) {
  //     const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
  //     res.serverError(errors);
  //     throw new Error(e);
  //   }
  // },


  getAllQuestionOfQuestionSet: async (req, res) => {
    try {
      const DATA = req.body;
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;

      let questionSetId=req.params.id
      
      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);
      
      const skip = Math.max(0, page - 1) * pageSize;
  
      const matchStage = {
        $match: {
          ...(questionSetId && { questionSetId: new mongoose.Types.ObjectId(questionSetId) }),
          ...(![undefined, null, ''].includes(search) && {
            $text: { $search: search },
          }),
        },
      };
  
  
      const sortStage = { $sort: { [column]: direction } };
  
      const facetStage = {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [{ $skip: skip }, { $limit: pageSize }],
        },
      };
      const pipeline = [matchStage, sortStage, facetStage];
      const resp = await Question.aggregate(pipeline);
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  createforQuestionSet: async (req, res) => {
    try {
      console.log("called the question to create by question set");
      const data = req.body;
      data.questionSetId=req.params.id
            const question = await Question.create(data);

      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('Question'),
        question: question,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      const seminar = await Question.find({ _id: req.params.id });
      return res.success(seminar);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  update: async (req, res) => {
    console.log('req.params.id', req.params.id);
    try {
      let existing = await Question.findOne({
        _id: req.params.id,
      });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Question');
        return res.unprocessableEntity(errors);
      }

      let question = await Question.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );

      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('Question'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  delete: async (req, res) => {
    try {
      let existing = await Question.findOne({ _id: req.params.id });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Question');
        return res.unprocessableEntity(errors);
      }

      await Question.findOneAndDelete({ _id: req.params.id });

      return res.success({
        message: MESSAGES.apiSuccessStrings.DELETED('Question'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};

module.exports = questionsetOjbect;
