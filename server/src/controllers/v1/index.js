const router = require('express').Router();
// import files
const adminRouter = require('./admin/routes');
const websiteRouter = require('./website/routes');
// const sharedRouter = require('./shared/routes');
// const mobileRouter = require('./mobile/routes');

// use
router.use('/admin', adminRouter);
router.use('/website',websiteRouter);
// router.use('/shared', sharedRouter);
// router.use('/mobile', mobileRouter);

module.exports = router;
