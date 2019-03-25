/********************************* MEN BASE **********************************/
/*                        Base for Node and Express App                      */
/*									               v.1.0.1									                 */
/*****************************************************************************/

/*
 * app.js file. This is configuration and setup file for node. NOT THE 
 * STARTING POINT of the application.
 * This app runs using "npm start" command, which is set like this
 * "scripts": {
 * 		"start": "node ./bin/www"
 *  }
 * in package.json. Edit this file only if needed, to add configuration or imports
 * prefer editing bin/www instead.
 */

/********************************* VARIABLES *********************************/

//Main variables
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Router variable
var router = require('./routes/router');

//App variable
var app = express();

/*****************************************************************************/


/********************************* SETUP *************************************/

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Import routes
app.use('/', router);

//Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//Export app
module.exports = app;

/*****************************************************************************/