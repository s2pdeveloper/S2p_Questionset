const app = require('express')();
const ShopController = require('./shop');

app.get('/', ShopController.getAll);
app.get('/:id', ShopController.getById);

module.exports = app;
