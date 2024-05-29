const app = require("express")();
const controller = require("./dashboard");


app.get('/getDashboardDetail/:shopId',
    controller.getDashboardDetail
);

app.get('/getDashboardSegment/:shopId',
    controller.getDashboardSegment
);


module.exports = app;
