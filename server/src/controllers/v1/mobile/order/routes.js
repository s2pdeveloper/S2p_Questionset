const app = require("express")();
const controller = require("./order");


app.put("/update/:id", 
controller.update);


  app.get(
    '/getChatShopByCustomerId',
    controller.getChatShopByCustomerId
);

module.exports = app;
