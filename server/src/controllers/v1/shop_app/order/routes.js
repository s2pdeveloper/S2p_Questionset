const app = require("express")();
const controller = require("./order");


app.get("/getById/:id", controller.getById);

app.put("/update/:id", controller.update);

// cust list
app.get('/getChatCustomerByShopId', controller.getChatCustomerByShopId
);

app.get('/getOrderCountByShopId', controller.getOrderCountByShopId
);


module.exports = app;
