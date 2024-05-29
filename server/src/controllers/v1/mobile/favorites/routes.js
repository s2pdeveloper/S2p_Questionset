const app = require('express')();
const controller = require('./favorites');

app.post('/', controller.create);

module.exports = app;
