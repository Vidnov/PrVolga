var createError = require('http-errors');
const Sequelize = require("sequelize");
const path = require("path");
const fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const DB = require('./database');
const {Message} = require('./CONST.js')
var app = express();
var bodyParser = require('body-parser');
// view engine setup

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(logger('dev',{stream:accessLogStream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('uploads'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});


try {
  DB.authenticate();
  console.log(Message.dbConnected)
} catch (error) {
  console.log(Message.dbError, error)
}


module.exports = app;
