const app = require('express')();
const Question=require('./question');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');
const upload=require("../../../../../utils/multer")

app.get('/questionSetQuestions/:id',Question.getAllQuestionOfQuestionSet);
app.post('/:id',upload.single("queImageUrl"), Question.createForQuestionSet);
app.put('/:id',upload.single("queImageUrl"), Question.update);
app.delete('/:id', Question.delete);
app.get('/:id',Question.getById);


module.exports = app;