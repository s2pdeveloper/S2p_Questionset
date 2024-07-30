const app = require('express')();

const Student = require('./student');
const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');
const { helpers } = require('handlebars');

app.get('/getVisibleQuestionSet',AuthHelper.authenticateJWT(["STUDENT"]),Student.getVisibleQuestionSet)
app.post('/login',Student.login);
app.get('/testByQuestionSet/:id',Student.testByQuestionSet)
app.post('/submitTest',AuthHelper.authenticateJWT(["STUDENT"]),Student.submitTest)
app.get('/getResultByQuestionSetId/:id',AuthHelper.authenticateJWT(["STUDENT"]),Student.getResultByQuestionSetId)
app.post('/rankedResult',AuthHelper.authenticateJWT(["STUDENT"]),Student.rankedResult);
app.post('/allResultOfStudent',AuthHelper.authenticateJWT(["STUDENT"]), Student.allResultOfStudent);
app.post('/Otplogin', Student.loginOtp);
app.post('/:id', Student.registerStudent);

module.exports = app;
