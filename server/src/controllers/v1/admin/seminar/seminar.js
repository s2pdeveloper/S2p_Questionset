const bcrypt = require('bcrypt');

const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const resCode = MESSAGES.resCode;
const OPTIONS = require('../../../../config/Options');
// const OrdersRepository = require('../../../../models/repository/OrderRepository');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { generateCreateData } = OPTIONS;
// const mail = require('../../../../models/helpers/EmailHelper');

const Seminar = require('../../../../models/seminar');

const seminaryObject = {
  getAll: async (req, res) => {
    try {
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;
      const skip = Math.max(0, parseInt(page, 10) - 1) * parseInt(pageSize, 10);

      const pipeline = [
        {
          $match: {
            ...(![undefined, null, ''].includes(search) && {
              $text: { $search: search },
            }),
          },
        },
        {
          $unwind: '$productDetails',
        },
        {
          $lookup: {
            from: 'Product',
            localField: 'productDetails.productId',
            foreignField: '_id',
            as: 'productDetails.productInfo',
          },
        },
        {
          $unwind: '$productDetails.productInfo',
        },
        {
          $lookup: {
            from: 'ProductImage',
            localField: 'productDetails.productInfo._id',
            foreignField: 'productId',
            as: 'productDetails.productInfo.productImages',
            pipeline: [
              {
                $project: {
                  _id: 1,
                  productId: 1,
                  isBanner: 1,
                  image: {
                    $concat: [process.env.IMAGE_PATH, '/product/', '$image'],
                  },
                },
              },
            ],
          },
        },
        {
          $lookup: {
            from: 'User_address',
            localField: 'userAddressId',
            foreignField: '_id',
            as: 'userAddress',
          },
        },
        {
          $unwind: '$userAddress',
        },
        {
          $lookup: {
            from: 'User',
            localField: 'customerId',
            foreignField: '_id',
            as: 'customerDetails',
          },
        },
        {
          $unwind: '$customerDetails',
        },
        {
          $group: {
            _id: '$_id',
            customerDetails: { $first: '$customerDetails' },
            status: { $first: '$status' },
            createdAt: { $first: '$createdAt' },
            updatedAt: { $first: '$updatedAt' },
            trackURL: { $first: '$trackURL' },
            COD: { $first: '$COD' },
            subTotal: { $first: '$subTotal' },
            shippingCharges: { $first: '$shippingCharges' },
            totalAmount: { $first: '$totalAmount' },
            orderNumber: { $first: '$orderNumber' },
            productDetails: {
              $push: '$productDetails.productInfo',
            },
          },
        },
        { $sort: { [column]: direction } },
        {
          $facet: {
            metadata: [{ $count: 'total' }],
            data: [{ $skip: skip }, { $limit: parseInt(pageSize, 10) }],
          },
        },
      ];
      // const resp = await OrdersRepository.getAndCountAll(pipeline);
      // return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  create: async (req, res) => {
    try {
      const DATA = req.body;
      console.log("you hit the Seminar create")
      const seminary = await Seminar.create(DATA);
      return res.success({
        message: MESSAGES.apiSuccessStrings.ADDED('Seminar'),
        seminary: seminary,
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  getById: async (req, res) => {
    try {
      const seminar = await Seminar.find({ _id: req.params.id });
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
      let existing = await Seminar.findOne({
        _id: req.params.id,
      });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Semimar');
        return res.unprocessableEntity(errors);
      }

      let seminar = await Seminar.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );

      return res.success({
        message: MESSAGES.apiSuccessStrings.UPDATE('Seminar'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },

  delete: async (req, res) => {
    try {
      let existing = await Seminar.findOne({ _id: req.params.id });

      if (!existing) {
        let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('Semimar');
        return res.unprocessableEntity(errors);
      }

      await Seminar.findOneAndDelete({ _id: req.params.id });

      return res.success({
        message: MESSAGES.apiSuccessStrings.DELETED('Seminar'),
      });
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
};

module.exports = seminaryObject;
