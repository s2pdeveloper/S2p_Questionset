const router = require('express').Router();
const AuthHelper = require('../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../config/Options');

const seminar = require('./seminar/routes')
const questionSet = require('./questionSet/routes')
const question = require('./question/routes')
const user = require('./user/routes')

router.use('/seminar', seminar);
router.use('/questionSet', questionSet);
router.use('/question', question);
router.use('/user', user);





module.exports = router;
