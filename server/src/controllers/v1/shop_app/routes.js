const router = require('express').Router();
const AuthHelper = require('../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../helpers/global.options');

// const shopRouter = require("./shop_user/routes");
const catalogue = require('./catalogue/routes');
const chat = require('./chat/routes');
const order = require('./order/routes');
const category = require('./category/routes');

// router.use("/shop",shopRouter);
router.use(
  '/catalogue',
  AuthHelper.authenticateJWT([usersRoles.SHOP]),
  catalogue
);
router.use('/chat', AuthHelper.authenticateJWT([usersRoles.SHOP]), chat);
router.use('/order', AuthHelper.authenticateJWT([usersRoles.SHOP]), order);
router.use(
  '/category',
  AuthHelper.authenticateJWT([usersRoles.SHOP]),
  category
);

module.exports = router;
