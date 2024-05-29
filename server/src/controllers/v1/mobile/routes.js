const express = require('express');
const router = express.Router();

const AuthHelper = require('../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../config/Options');

const user = require('./user/routes');
const advertise = require('./advertise/routes');
const offer = require('../mobile/offer/routes');
const catalogue = require('../mobile/catalogue/routes');
const order = require('./order/routes');
const favorite = require('./favorites/routes');
const dashboard = require('../mobile/dashboard/routes');
const seasonalOffer = require('../mobile/seasonalOffer/routes');
const shop = require('./shop/routes');

router.use('/user', user);
router.use('/shop', AuthHelper.authenticateJWT([usersRoles.CUSTOMER]), shop);

router.use(
  '/advertise',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER]),
  advertise
);
router.use('/offer', AuthHelper.authenticateJWT([usersRoles.CUSTOMER]), offer);
router.use(
  '/seasonal-offer',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER]),
  seasonalOffer
);
// router.use(
//   '/category',
//   AuthHelper.authenticateJWT([usersRoles.CUSTOMER, usersRoles.SHOP]),
//   category
// );
// router.use(
//   '/sub-category',
//   AuthHelper.authenticateJWT([usersRoles.CUSTOMER, usersRoles.SHOP]),
//   subCategory
// );
router.use(
  '/catalogue',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER, usersRoles.SHOP]),
  catalogue
);
router.use(
  '/order',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER, usersRoles.SHOP]),
  order
);
router.use(
  '/favorite',
  AuthHelper.authenticateJWT([usersRoles.CUSTOMER]),
  favorite
);
router.use(
  '/dashboard',
  AuthHelper.authenticateJWT([usersRoles.SHOP]),
  dashboard
);

module.exports = router;
