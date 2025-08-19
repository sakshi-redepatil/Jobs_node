var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db=require('./models'); //connection

var usersRouter = require('./routes/users.routes');
var authRouter=require('./routes/auth.routes');
require('./utils/cron.utils');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.sequelize.sync({alter:true}); //sync db and alter tables
app.use('/auth',authRouter);
app.use('/users', usersRouter);

module.exports = app;
