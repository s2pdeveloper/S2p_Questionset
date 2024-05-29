const app = require('express')();
const controller = require('./offer');

app.get('/', controller.getAll);

module.exports = app;
