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
  '/profile/:id',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  UserController.getUserProfile
);
app.put(
  '/update/:id',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  UserController.update
);

app.get(
  '/getAll',
  UserController.getAll
)

app.getAll

app.patch('/status/:id', UserController.changeStatus);
app.delete('/deleteById/:id', validate('checkParamId'), UserController.delete);
app.put('/resetPassword/:id', UserController.resetPassword);


module.exports = app;