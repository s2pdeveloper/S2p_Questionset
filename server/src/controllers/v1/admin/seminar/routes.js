const app = require('express')();
const seminaryController = require('./seminar');
// const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.get('/', seminaryController.getAll);
app.get('/generateQrCode/:id', seminaryController.generateQrCode);//generate the Qr code based on seminar Id passed in params
app.get('/getAllQuestionSet',seminaryController.getAllQuestionSet)  //Get All question set of particular seminar
app.get('/questionSetOverview/:id',seminaryController.questionSetOverview)
app.get('/list', seminaryController.getList);
app.get('/:id', seminaryController.getById);
app.post('/', seminaryController.create);
app.put('/:id', seminaryController.update);
app.delete('/:id', seminaryController.delete);

module.exports = app;
