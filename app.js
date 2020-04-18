var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const compression = require('compression');

var mainRoutes = require('./routes/mainRoutes');
var indexingRoutes = require('./routes/indexingRoutes');
var cloakingRoutes = require('./routes/cloakingRoutes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

//remove trailing slashes
app.use((req, res, next) => {
   const test = /\?[^]*\//.test(req.url);
  if (req.url.substr(-1) === '/' && req.url.length > 1 && !test)
  res.redirect(301, req.url.slice(0, -1));
  else
  next();
});

//routing
app.use(mainRoutes);
app.use(indexingRoutes);
app.use(cloakingRoutes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
