const app = require('express')();
const controller = require('./subCategory');

app.get('/', controller.getAllSubCategory);

module.exports = app;
