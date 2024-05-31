const bcrypt = require('bcrypt');
const { Student } = require('../../../../models/student');
const QuestionSet=require("../../../../models/questionSet")
const MESSAGES = require('../../../../models/helpers/MessagesHelper');
const mongoose=require("mongoose");
const Question = require('../../../../models/question');
const Questionset = require('../../../../models/questionSet');
const Result = require('../../../../models/result');
const { eq } = require('lodash');

const customerobj = {
  registerStudent: async (req, res) => {
    try {
      const data = req.body;
            data.seminarId=req.params.id
      const student = await Student.create(data);
      if (student) {
        const token = student.genToken();
        console.log('token', token);

        res.status(201).json({
            message: MESSAGES.apiSuccessStrings.ADDED('Student'),
            studentId:student._id,
            token:token  
          })
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },
  getAllQuestionSetOfSeminar: async (req, res) => {


    // const find the user first
    // take out the seminary id so all the Question set we can show in the test area

    try {
      const data = req.body;
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;

      //Need to change the code that is student id should be get from req
      const student= await Student.findOne({_id:"6656ee1e1509b7e1a7830510"})
      let seminarId=student.seminarId
    console.log("seminar Id is ",seminarId);
      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);
      
      const skip = Math.max(0, page - 1) * pageSize;
  
      const matchStage = {
        $match: {
         ...(seminarId && { seminarId: new mongoose.Types.ObjectId(seminarId) }),
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
      const resp = await QuestionSet.aggregate(pipeline);
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },



  testByQuestionSet: async (req, res) => {


    // const find the user first
    // take out the seminary id so all the Question set we can show in the test area

    try {
      const data = req.body;
      let {
        page = 1,
        pageSize = 10,
        search = null,
        column = 'createdAt',
        direction = -1,
      } = req.query;

      //Need to change the code that is student id should be get from req
      // const student= await Student.findOne({_id:"6656ee1e1509b7e1a7830510"})
      // let seminarId=student.seminarId
      let questionSetId=req.params.id
    // console.log("seminar Id is ",seminarId);
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
      const projectStage = {
        $project: {
          correctOption: 0,
        },
      };
      const pipeline = [matchStage, sortStage, projectStage,facetStage];
      const resp = await Question.aggregate(pipeline);
      return res.success(resp);
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(e);
    }
  },





  submitTest: async (req, res) => {
    try {
      const marksPerQuestion = 10;
      const { studentId, seminarId, questionSetId, answers } = req.body;
    
      const questions = await Question.find({ questionSetId });
  
      let correctAnswers = 0;
  
      
      answers.forEach((answer) => {
        const questionId = Object.keys(answer)[0];
        const question = questions.find((q) => q._id.toString() === questionId);
  
        console.log("checking for ",question && question.correctOption === answer[questionId],question.correctOption,"==",answer[questionId])
        if (question && question.correctOption === answer[questionId]) {
          correctAnswers++;
        }
      });
  
      // Fetch question set details
      const questionSet = await Questionset.findById(questionSetId);
     console.log("your questionset",questionSet);
      if (!questionSet) {
        // Handle case where question set is not found
        const errors = "Question set Not found";
        res.serverError(errors);
        return;
      }
  
      // Calculate max score, obtained marks, passing marks, and status
      const maxScore = Number(questionSet.noOfQuestion * marksPerQuestion);
      const obtainMarks = correctAnswers * marksPerQuestion;
      const passingMarks = questionSet.passingMarks;
      const status = obtainMarks >= passingMarks ? 'PASS' : 'FAIL';
  
      // Create result data object
      const resultData = {
        studentId,
        questionSetId,
        seminarId,
        status,
        obtainMarks,
        passingMarks,
        maxScore
      };
  
      
      const result = await Result.create(resultData);
  
    
      res.success(result);
  
    } catch (error) {
     
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },
  



  getResultByQuestionSetId: async (req, res) => {
    try {
      
      const questionSetId=req.params.id;
      const studentId=req.user? req.user._id: req.body.studentId
     const seminarId=req.user?req.user.seminarId : req.body.seminarId
      const result= await Result.findOne({studentId:studentId,questionSetId:questionSetId});

    res.status(200).json({
      result
    })
  
    } catch (error) {
     
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
    }
  },




  rankedResult: async (req, res) => {
    try {
      
      const questionSetId=req.body.questionSetId;
      const studentId=req.user? req.user._id: req.body.studentId
     const seminarId=req.user?req.user.seminarId : req.body.seminarId

      const data = req.body;
      let {
        page = 1,
        pageSize = 9999,
        search = null,
        column = 'obtainMarks',
        direction = -1,
      } = req.query;

      page = parseInt(page, 10);
      pageSize = parseInt(pageSize, 10);
      direction = parseInt(direction, 10);
      const skip = Math.max(0, page - 1) * pageSize;
      const matchStage = {
        $match: {
         ...(seminarId && { seminarId: new mongoose.Types.ObjectId(seminarId) }),
         ...(questionSetId && { questionSetId: new mongoose.Types.ObjectId(questionSetId) }),
        },
      };
      const facetStage = {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: [{ $skip: skip }, { $limit: pageSize }],
        },
      };
      
      const pipeline = [matchStage, facetStage,];
      const resp = await Result.aggregate(pipeline);
      let noOfPassStudent=0
      let noOfFailStudent=0;
      let totalStudent=resp[0].data.length;
      let student=null
      let topStudent=[]

      resp[0].data.forEach((item, index) => {
        item.rank = index + 1;
        if(item.status=="PASS"){
          noOfPassStudent++
        }else{
          noOfFailStudent++
        }
        if(item.studentId==studentId){
          student={...item,rank:index+1}
        }
        if(index<3){
          topStudent.push(item)
        }
      })

    res.status(200).json({
    
      noOfFailStudent,
      noOfPassStudent,
      totalStudent,
      topStudent,
      student
    })
  
    } catch (error) {
     
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res.serverError(errors);
      throw new Error(error);
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
//         rawstatus: true,
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
