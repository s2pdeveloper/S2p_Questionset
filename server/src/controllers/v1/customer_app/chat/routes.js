const app = require("express")();
const controller = require("./chat");
const upload = require("./../../../../shared/services/upload");



app.post("/create",
    upload.single("image"),
    controller.create);

app.get(
    '/getMsgByCustomerId/:roomName',
    controller.getMsgByCustomerId
);

app.put("/rating/:id", controller.orderRating);


module.exports = app;
