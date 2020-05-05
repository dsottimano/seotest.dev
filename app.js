var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const compression = require('compression');
var mainRoutes = require('./routes/mainRoutes');
var indexingRoutes = require('./routes/indexingRoutes');
var cloakingRoutes = require('./routes/cloakingRoutes');
let helmet = require('helmet');
const verify = require('googlebot-verify');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.disable('x-powered-by')


var fs = require('fs')

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

function logger(req, res, next) {
  if (req.url.includes("/logs")) {
    console.log("hit logs")
    return next()
  }
  if (!req.headers['user-agent'].includes("Googlebot")) {
    return next()
  }
  if (req.headers['user-agent'].includes("Googlebot")) {
   
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    verify(ip, (error, isGoogle) => {
      if (isGoogle) {
        console.log("legit google")
        var ws = fs.createWriteStream('./logs/info.log', {
          flags: 'a'
        });
        ws.write(JSON.stringify({
            "url": req.url,
            "time": formatDate(new Date()),
            "remoteAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            "userAgent": req.headers['user-agent'],
            "statusCode": res.statusCode
          }

        ) + "\n")

        return next()
      } else {
        return next();
      }
    });

  }
}

app.use(logger)



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
app.use(hiddenRoutes);



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
  res.render('error');
});

module.exports = app;