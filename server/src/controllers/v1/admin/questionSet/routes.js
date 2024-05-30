const app = require('express')();
const QuestionSet = require('./questionSet');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');


app.get('/:id', QuestoinSet.getById);
app.get('/seminarAllQuestionSet/:id', QuestoinSet.getAllBySeminaryId);
app.post('/:id', QuestoinSet.createForSeminar);
app.put('/changeVisibility/:id', QuestoinSet.changeVisibility);
app.put('/:id', QuestoinSet.update);
app.delete('/:id', QuestoinSet.delete);

module.exports = app;
