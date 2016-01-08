var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup  NO NEED. WE ARE USING ANGULAR
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// NO NEED. WE ARE USING ANGULAR
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', routes);
// app.use('/users', users);


console.log("env = " + app.get('env') );



app.use(express.static(path.join(__dirname, './web_app')));
// This covers serving up the index page
app.use(express.static(path.join(__dirname, './web_app/.tmp')));
app.use(express.static(path.join(__dirname, './web_app/app')));

// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});



// /**
//  * Development Settings
//  */
// if (app.get('env') === 'dev') {
//     // This will change in production since we'll be using the dist folder
//     app.use(express.static(path.join(__dirname, '../web_app')));
//     // This covers serving up the index page
//     app.use(express.static(path.join(__dirname, '../web_app/.tmp')));
//     app.use(express.static(path.join(__dirname, '../web_app/app')));

//     // Error Handling
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// /**
//  * Production Settings
//  */
// if (app.get('env') === 'prod') {

//     // changes it to use the optimized version for production
//     app.use(express.static(path.join(__dirname, '/dist')));

//     // production error handler
//     // no stacktraces leaked to user
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: {}
//         });
//     });
// }



module.exports = app;
