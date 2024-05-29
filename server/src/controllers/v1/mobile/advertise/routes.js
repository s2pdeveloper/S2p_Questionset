const app = require('express')();
const controller = require('./advertise');

app.get('/', controller.getAll);

module.exports = app;
