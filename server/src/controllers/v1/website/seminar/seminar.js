const bcrypt = require('bcrypt');
const { Student } = require('../../../../models/student');
const { User } = require('../../../../models/User');
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const resCode = MESSAGES.resCode;
const _ = require('lodash');
const OPTIONS = require('../../../../config/Options');
const mongoose = require('mongoose');
const mail = require('../../../../models/helpers/EmailHelper');
const UserHelper = require('../../../../models/helpers/UserHelper');
const ObjectId = mongoose.Types.ObjectId;
const puppeteer = require('puppeteer');
const { path } = require('./routes');
const Path = require('path');
const { token } = require('morgan');
const customerobj = {
  registerStudent: async (req, res) => {
    try {
      const DATA = req.body;
      const student = await Student.create(DATA);
      if (student) {
        const token = student.genToken();
        console.log('token', token);

        res.status(201).json({
            message: MESSAGES.apiSuccessStrings.ADDED('Student'),
            token:token  
          })
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },






















//   invoicePage: async (req, res) => {
//     try {
//       const order = await Order.findOne({ _id: req.params.id }).populate(
//         'productDetails.productId'
//       );
//       const address = await User_address.findOne({ _id: order.userAddressId });
//       const actualAddress = await Address.findOne(address.addressId);
//       const Data = {
//         customerName: _.capitalize(actualAddress.name),
//         date: order.createdAt.toISOString().split('T')[0], //: order.createdAt.split("T")[0],
//         addressLine1: _.capitalize(actualAddress.addressLine1),
//         addressLine2: _.capitalize(actualAddress.addressLine2),
//         addressLine3: _.capitalize(actualAddress.addressLine3),
//         city: _.capitalize(actualAddress.city),
//         state: _.capitalize(actualAddress.state),
//         pincode: actualAddress.pincode,
//         products: order.productDetails,
//         deliveryCharge: order.shippingCharges,
//         totalAmount: order.totalAmount,
//         subTotal: order.subTotal,
//         id: order.orderNumber,
//       };
//       res.render('index.ejs', Data);
//     } catch (error) {
//       res.serverError(error);
//     }
//   },

//   downloadInvoice: async (req, res) => {
//     try {
//       console.log('hit the download invoice', req.query.url);
//       //const URL = req.query.url;
//       const brower = await puppeteer.launch();
//       const page = await brower.newPage();
//       const url = await page.goto(
//         `${process.env.VERIFYURL}/api/v1/website/customer/invoice/${req.params.id}`
//       );
//       await page.viewport({ width: 1680, height: 1050 });

//       const todayDate = new Date();
//       const pdfn = await page.pdf({
//         printBackground: true,
//         format: 'A4',
//       });
//       await brower.close();
//       res.setHeader('Content-Type', 'application/pdf');
//       res.send(pdfn);
//     } catch (error) {
//       res.serverError(error);
//     }
//   },

//   loginCustomer: async (req, res) => {
//     try {
//       let query = {
//         $and: [{ email: req.body.email }],
//       };

//       let existingUser = await User.findOne(query);
//       if (
//         existingUser &&
//         existingUser.role === 'CUSTOMER' &&
//         (await existingUser.isPasswordMatch(req.body.password))
//       ) {
//         if (!existingUser.emailVerified) {
//           return res.status(401).json({
//             message: 'please verify the email',
//           });
//         }

//         existingUser.lastLoginAt = Date.now();
//         await existingUser.save();
//         return res.success(UserHelper.modifyOutputData(existingUser));
//       } else {
//         let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
//         return res.preconditionFailed(errors);
//       }
//     } catch (e) {
//       const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
//       res.serverError(errors);
//       throw new Error(e);
//     }
//   },

//   verifyByCustomerEmail: async (req, res) => {
//     try {
//       const user = await User.findOne({ _id: req.params.id });
//       if (!user) {
//         return res.send(`
//     <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
//         <h3 style="color: red; font-family: Arial;">Invalid User</h3>
//       </div>
//     </div>
//   `);
//       }

//       if (user.emailVerified) {
//         return res.send(`
//     <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
//       <div style="text-align: center;">   
//         <h3 style="color: blue; font-family: Arial;">     
//              Email already Verified        
//         </h3>
//       </div>
//     </div>
//   `);
//       } else {
//         user.emailVerified = true;
//         await user.save();
//         return res.send(`
//     <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
//       <div style="text-align: center;">   
//         <h3 style="color: green; font-family: Arial;">     
//              Email Verified successfully       
//         </h3>
//       </div>
//     </div>
//   `);
//       }
//     } catch (error) {
//       res.serverError(error);
//     }
//   },

//   getAllOrders: async (req, res) => {
//     try {
//       console.log('you hit getAllOrderRoute', req.params.id);
//       // const orders=await Order.find({customerId:req.params.id});
//       const id = req.params.id;
//       const orders = await Order.aggregate([
//         {
//           $match: { customerId: new mongoose.Types.ObjectId(req.params.id) }, // No need for 'new' keyword here
//         },
//         {
//           $sort: { createdAt: 1 },
//         },
//         {
//           $group: {
//             _id: null,
//             orders: { $push: '$$ROOT' },
//             totalCount: { $sum: 1 },
//           },
//         },
//         {
//           $project: {
//             _id: 0,
//             orders: 1,
//             totalCount: 1,
//           },
//         },
//       ]);

//       const data = {
//         orders: orders[0]?.orders || [], // Use optional chaining and provide a default value (an empty array)
//         totalOrdersCount: orders[0]?.totalCount || 0, // Use optional chaining and provide a default value (0)
//       };

//       res.success({
//         message: 'all order of user',
//         data,
//       });
//     } catch (error) {
//       res.serverError(error);
//     }
//   },

//   getAllCustomerAddress: async (req, res) => {
//     try {
//       const address = await USER_ADDRESS.find({
//         customerId: new ObjectId(req.params.id),
//         isDelete: { $ne: OPTIONS.defaultStatus.DELETED },
//       }).populate('addressId');
//       // if (address.length > 0) {
//       //   address[0].isDefault = true;
//       //   await address[0].save();
//       // }

//       return res.success({
//         message: 'Addresses retrieved successfully.',
//         data: address,
//       });
//     } catch (e) {
//       console.error(e);
//       res.status(errors);
//     }
//   },

//   requestResetPasswordOTP: async (req, res) => {
//     try {
//       const user = await User.findOne({ email: req.body.email });
//       if (!user) {
//         return res.status(401).json({
//           success: false,
//           message: 'inValid email',
//         });
//       }
//       var random = Math.floor(Math.random() * 9000) + 1000;
//       user.resetPasswordOTP = random;
//       await user.save();
//       mail.sendMail({
//         email: req.body.email,
//         temp: 'resetOTP.html',
//         subject: `RESET PASSWORD OTP ${random}`,
//         userName: user.firstName,
//         OTP: random,
//       });
//       console.log('random', random);
//       return res.success({
//         message: 'OTP successfully sent to email',
//       });
//     } catch (error) {
//       res.serverError(error);
//     }
//   },

//   resetPassword: async (req, res) => {
//     try {
//       const { email, newPassword, confirmPassword, OTP } = req.body;

//       const user = await User.findOne({ email: email });
//       console.log('your hit the resetPassword route', req.body);
//       if (!user || confirmPassword != newPassword) {
//         return res.status(401).json({
//           message: 'invalid email or inCorrect confirmPassword ',
//         });
//       }

//       if (OTP !== user.resetPasswordOTP) {
//         return res.status(401).json({
//           message: 'Incorrect OTP',
//         });
//       }

//       user.password = newPassword;
//       user.resetPasswordOTP = null;
//       await user.save();

//       res.success({
//         message: 'password reset successfully',
//       });
//     } catch (error) {
//       res.serverError(error);
//     }
//   },

//   updatePassword: async (req, res) => {
//     const { oldPassword, newPassword, confirmPassword, _id } = req.body;

//     if (newPassword !== confirmPassword) {
//       return res.success({
//         message: 'confirm password and password should be same',
//       });
//     }

//     const user = await User.findOne({ _id: req.user._id });
//     if (!(await user.isPasswordMatch(oldPassword))) {
//       return res.success({ message: 'OldPassword is incorrect' });
//     }

//     user.password = newPassword;
//     await user.save();
//     return res.success(UserHelper.modifyOutputData(user));
//     // return res.success({ message: 'passowrd changed successfully', user });
//   },

//   update: async (req, res) => {
//     try {
//       let existing = await User.findByIdAndUpdate(req.params.id, req.body, {
//         upsert: true,
//         new: true,
//         rawResult: true,
//       });
//       if (!existing) {
//         let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS('User');
//         return res.unprocessableEntity(errors);
//       }
//       return res.success({
//         message: MESSAGES.apiSuccessStrings.UPDATE('User profile has been'),
//       });
//     } catch (e) {
//       console.error(e);
//       res.status(errors);
//     }
//   },
};

module.exports = customerobj;
