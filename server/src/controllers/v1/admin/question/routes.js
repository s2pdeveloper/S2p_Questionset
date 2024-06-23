const app = require('express')();
const Question=require('./question');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.get('/questionSetQuestions/:id', Question.getAllQuestionOfQuestionSet);
app.post('/:id', Question.createForQuestionSet);
app.put('/:id', Question.update);
app.delete('/:id', Question.delete);
app.get('/:id', Question.getById);


module.exports = app;