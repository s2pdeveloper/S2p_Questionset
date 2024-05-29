const app = require("express")();
const controller = require("./chat");
const upload = require("./../../../../shared/services/upload");


app.post("/create",
    upload.single("image"),
    controller.create);

app.get(
    '/getMsgByShopId/:roomName',
    controller.getMsgByShopId
);

module.exports = app;
