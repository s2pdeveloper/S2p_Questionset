const app = require('express')();
const QuestionSet = require('./questionSet');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.get('/', QuestionSet.getAll);
app.post('/', QuestionSet.create);
app.get('/seminarAllQuestionSet/:id', QuestionSet.getAllBySeminaryId);
app.post('/:id', QuestionSet.createforSeminar);
app.put('/changeVisibility/:id', QuestionSet.changeVisibility);
app.put('/:id', QuestionSet.update);
app.delete('/:id', QuestionSet.delete);
app.get('/:id', QuestionSet.getById);

module.exports = app;
