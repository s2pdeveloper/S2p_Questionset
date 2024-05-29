const app = require('express')();

const UserController = require('./seminar');
const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');
const { helpers } = require('handlebars');

// app.post('/', UserController.registerStudent);
// app.post('/updatePassword',AuthHelper.authenticateJWT("CUSTOMER"),UserController.updatePassword);// AUTH REQUIRE
// app.post('/requestResetPasswordOTP',UserController.requestResetPasswordOTP);
// app.post('/resetPassword',UserController.resetPassword);   
// app.post('/customerLogin',UserController.loginCustomer);
// app.get('/verifyEmail/:id', UserController.verifyByCustomerEmail);
// app.put('/:id',AuthHelper.authenticateJWT("CUSTOMER"),UserController.update);// AUTH REQUIRE
// app.get('/getAllOrders/:id',UserController.getAllOrders);
// // user_address table api
// app.get('/getAllCustomerAddress/:id', UserController.getAllCustomerAddress);// AUTH REQUIRE
// app.get('/invoice/:id', UserController.invoicePage);  
// app.get('/invoiceDownload/:id',AuthHelper.authenticateJWT("CUSTOMER"), UserController.downloadInvoice);// AUTH REQUIRE
module.exports = app;
