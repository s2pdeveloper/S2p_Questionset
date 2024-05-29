const app = require('express')();
const controller = require('./seasonalOffer');

app.get('/', controller.getAll);

module.exports = app;
