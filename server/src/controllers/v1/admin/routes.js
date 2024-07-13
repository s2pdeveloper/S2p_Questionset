const router = require('express').Router();
const AuthHelper = require('../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../config/Options');

const seminar = require('./seminar/routes')
const questionSet = require('./questionSet/routes')
const question = require('./question/routes')
const user = require('./user/routes')
const result=require("./result/routes")


router.use('/seminar', seminar);
router.use('/questionSet',AuthHelper.authenticateJWT(usersRoles.getAdmin()), questionSet);
router.use('/question',AuthHelper.authenticateJWT(usersRoles.getAdmin()), question);
router.use('/user',  user);
router.use('/result', AuthHelper.authenticateJWT(usersRoles.getAdmin()), result);





module.exports = router;
