const _ = require('lodash');
const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const logger = require('morgan');
const helmet = require('helmet');
const express = require('express');
const errorHandler = require('errorhandler');
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config();
// global._ = lodash;
const { WEBPORT, NODE_ENV } = process.env;

app.set('env', NODE_ENV);
app.use(logger('dev'));
app.use(helmet({
  crossOriginResourcePolicy: false,
  contentSecurityPolicy:false
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());

app.set('view engine','ejs')
app.set('views',path.resolve("./views"));

app.use(
  '/',
  express.static(path.join(__dirname, 'website'), { maxAge: 31557600000 })
);

app.use(cors('*'));
if (NODE_ENV !== 'production') {
  app.use(logger('dev'));
}

app.set('port', WEBPORT);
const server = app.listen(app.get('port'), () => {
  console.log(
  
    '%s App is running at http://localhost:%d in %s mode',
    chalk.green('✓'),
    app.get('port'),
    app.get('env')
  );
  console.log('Press CTRL-C to stop\n');
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

