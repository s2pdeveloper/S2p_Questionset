const app = require('express')();
const QuestionSet = require('./questionSet');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');



app.get('/:id', QuestionSet.getById);
app.get('/seminarAllQuestionSet/:id', QuestionSet.getAllBySeminaryId);
app.post('/:id', QuestionSet.createForSeminar);
app.put('/changeVisibility/:id', QuestionSet.changeVisibility);
app.put('/:id', QuestionSet.update);
app.delete('/:id', QuestionSet.delete);

module.exports = app;
