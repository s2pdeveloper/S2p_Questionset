const router = require('express').Router();
const AuthHelper = require('../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../config/Options');

const chat = require('./chat/routes');
router.use('/chat', AuthHelper.authenticateJWT([usersRoles.CUSTOMER]), chat);

module.exports = router;
