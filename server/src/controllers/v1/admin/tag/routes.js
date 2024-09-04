const app = require('express')();
const Tag = require('./tag');
 

app.get('/getAll', Tag.getAll); 
app.get('/list', Tag.masterData); 
app.post('/create', Tag.createTag);
app.put('/update/:id', Tag.update);
app.delete('/delete/:id', Tag.delete);
app.get('/getById/:id', Tag.getById);

module.exports = app;
