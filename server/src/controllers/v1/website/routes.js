const router = require('express').Router();
const AuthHelper = require('../../../models/helpers/AuthHelper');
const { usersRoles } = require('../../../config/Options');

// const user = require('./user/routes');
// const role = require('./role/routes');
// const categories = require('./categories/routes')


const seminar = require('./seminar/routes')
const student = require('./student/routes')
// const question = require('./question/routes')


// router.use('/user', user);
// router.use('/cart', cartoption);
// router.use('/orders', orders);
// // router.use('/jewellery', jewellery);
// router.use('/tag',tag);


router.use('/seminar', seminar);
router.use('/student', student);
// router.use('/question', question);





module.exports = router;
