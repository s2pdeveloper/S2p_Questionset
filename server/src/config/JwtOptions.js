const { jwtTokenExpiry } = require('./Options');
require('dotenv').config();

const jwtOptions = {};
jwtOptions.secretOrKey = process.env.JWT_SECRET_KEY;
jwtOptions.expiry = jwtTokenExpiry;

module.exports = jwtOptions;
