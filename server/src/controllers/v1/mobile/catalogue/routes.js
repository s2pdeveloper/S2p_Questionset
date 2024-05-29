const app = require('express')();
const controller = require('./catalogue');
const { validate } = require('../../../../middleware/validators');

app.post('/', validate('createCatalogue'), controller.create);

app.get('/', controller.getAll);

app.get('/:id', controller.getById);

app.put('/:id', validate('updateCatalogue'), controller.update);

app.delete('/:id', validate('checkParamId'), controller.delete);

module.exports = app;
