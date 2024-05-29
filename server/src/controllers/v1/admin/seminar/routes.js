const app = require('express')();
const seminaryController = require('./seminar');
// const { usersRoles } = require('../../../../config/Options');
const { validate } = require('../../../../middleware/Validators');
const AuthHelper = require('../../../../models/helpers/AuthHelper');

app.get('/', seminaryController.getAll);
app.get('/:id', seminaryController.getById);
app.post('/', seminaryController.create);
app.put('/:id', seminaryController.update);
app.delete('/:id', seminaryController.delete);

// app.get('/todaysOrder',seminaryController.getTodayOrder);
// app.get('/orderByStatus',seminaryController.orderBystatus);
// app.get('/:id', seminaryController.getById);
// app.get('/byCustomerId/:id', seminaryController.getOrdersByCustomerId);
// app.put('/:id', seminaryController.update);

// app.post('/createOrders', seminaryController.create);
// // app.delete('/:id', seminaryController.deleteById);
// app.patch('/:id', seminaryController.changeStatus);
// app.delete('/:id', validate('checkParamId'), seminaryController.delete);


//Order Details
// app.get('/details/:id',seminaryController.getById);
// app.post('/details', seminaryController.createOrdDetails);

module.exports = app;
