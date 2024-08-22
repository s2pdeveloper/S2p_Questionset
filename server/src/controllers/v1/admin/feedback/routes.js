const app = require('express')();
const Feedback = require('./feedback');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');
const upload=require("../../../../../utils/multer")

app.get('/getAll', Feedback.getAll); 
app.post('/create',upload.single("queImageUrl"), Feedback.createFeedback);
app.put('/update/:id',upload.single("queImageUrl"), Feedback.update);
app.delete('/delete/:id', Feedback.delete);
app.get('/getById/:id', Feedback.getById);

module.exports = app;
