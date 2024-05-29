const app = require('express')();
const controller = require('./category');

app.get('/', controller.getAllParentCategory);

module.exports = app;
