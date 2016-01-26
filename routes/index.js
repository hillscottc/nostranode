"use strict";
var express = require('express'),
    router = express.Router();

/* The / routes for the application. */

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Nostranode'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'Nostranode'});
});

module.exports = router;
