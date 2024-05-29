const app = require('express')();

const UserController = require('./user');
const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.post(
  '/register',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  UserController.create
);

app.post('/login', UserController.login);
app.get(
  '/getAll',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  UserController.getAll
);

app.get(
  '/profile/:id',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  UserController.getUserProfile
);

app.put(
  '/update/:id',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  UserController.update
);

// app.delete('/:id' , UserController.delete)
app.patch('/status/:id', UserController.changeStatus);
app.delete('/deleteById/:id', validate('checkParamId'), UserController.delete);

//    USER ADDRESS PART
app.post('/createUserAddress', UserController.createAddress);
app.get('/getUserAddressById/:id', UserController.getAddressById);
app.get('/getUserAddressById/:id', UserController.getAddressById);

app.get('/getAllCustomerAddress/:id',UserController.getAllCustomerAddress);

app.put('/updateUserAddress/:id', UserController.updateAddress);
app.delete('/deleteUserAddress/:id', UserController.deleteAddressById);


// Customer Registration & Login

app.put('/resetPassword/:id', UserController.resetPassword);


module.exports = app;
