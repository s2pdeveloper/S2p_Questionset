const app = require('express')();
const Question=require('./question');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.put('/:id', Question.update);
app.delete('/:id', Question.delete);
app.post('/:id', Question.createForQuestionSet);
app.get('/questionSetQuestions/:id', Question.getAllQuestionOfQuestionSet);
app.get('/:id', Question.getById);

module.exports = app;
