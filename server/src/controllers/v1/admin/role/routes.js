const app = require('express')();

const RoleController = require('./role');
const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.post(
  '/addRole',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  RoleController.create
);
app.get(
  '/getAll',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  RoleController.getAll
);
app.get(
  '/:id',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  RoleController.getById
);
app.get(
  '/getByName/:name',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  RoleController.getByName
);

app.put(
  '/:id',
  // AuthHelper.authenticateJWT(usersRoles.getAdmin()),
  RoleController.update
);

app.delete('/:id',

  RoleController.deleteById)

                                 //  User Role Mapping

                                 

module.exports = app;
