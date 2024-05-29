const app = require('express')();
const QuestoinSet = require('./questionSet');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.get('/', QuestoinSet.getAll);
app.get('/:id', QuestoinSet.getById);
app.post('/', QuestoinSet.create);
app.get('/seminarAllQuestionSet/:id', QuestoinSet.getAllBySeminaryId);
app.post('/:id', QuestoinSet.createforSeminar);
app.put('/changeVisibility/:id', QuestoinSet.changeVisibility);
app.put('/:id', QuestoinSet.update);
app.delete('/:id', QuestoinSet.delete);


module.exports = app;
