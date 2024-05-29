const app = require('express')();

const Student = require('./student');
const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');
const { helpers } = require('handlebars');


app.post('/:id', Student.registerStudent);
app.get('/testArea,',Student.testArea)

module.exports = app;
