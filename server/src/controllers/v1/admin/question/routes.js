const app = require('express')();
const Question=require('./question');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');


app.get('/:id', Question.getById);
app.put('/:id', Question.update);
app.delete('/:id', Question.delete);
app.post('/:id', Question.createforQuestionSet);
app.get('/getAllQuestionOfQuestionSet/:id', Question.getAllQuestionOfQuestionSet);

module.exports = app;
