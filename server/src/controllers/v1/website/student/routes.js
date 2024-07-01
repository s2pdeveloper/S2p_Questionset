const app = require('express')();

const Student = require('./student');
const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');
const { helpers } = require('handlebars');

app.get('/getVisibleQuestionSet',Student.getVisibleQuestionSet)
app.post('/login',Student.login);
app.get('/testByQuestionSet/:id',Student.testByQuestionSet)
app.post('/submitTest',Student.submitTest)
app.get('/getResultByQuestionSetId/:id',Student.getResultByQuestionSetId)
app.post('/rankedResult',Student.rankedResult);
app.post('/allResultOfStudent', Student.allResultOfStudent);
app.post('/:id', Student.registerStudent);

module.exports = app;
