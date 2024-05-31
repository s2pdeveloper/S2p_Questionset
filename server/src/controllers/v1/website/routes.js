const router = require('express').Router();
const AuthHelper = require('../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../config/Options');
const student = require('./student/routes')
router.use('/student', student);
module.exports = router;
