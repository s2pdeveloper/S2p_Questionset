const app = require('express')();
const QuestionSet = require('./questionSet');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');


app.post('/duplicateQuestionSet', QuestionSet.duplicateQuestionSet);
app.get('/getAll', QuestionSet.getAll);
app.get('/seminarAllQuestionSet/:id', QuestionSet.getAllBySeminaryId);
app.get('/questionSetOverView/:id', QuestionSet.questionSetOverview);
app.post('/:id', QuestionSet.createForSeminar);
app.put('/changeVisibility/:id', QuestionSet.changeVisibility);
app.put('/:id', QuestionSet.update);
app.delete('/:id', QuestionSet.delete);
app.get('/:id', QuestionSet.getById);


module.exports = app;
