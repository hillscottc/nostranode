"use strict";
var express = require('express'),
    nostra = require('nostra'),
    router = express.Router();

/* The /api/ routes for the application. */

/* GET /api/fortune */
router.get('/fortune', function(req, res, next) {
  var fortune = nostra.generate();
  if (fortune) {
    res.status(200).json({"fortune": fortune});
  } else {
    res.status(500).json({"err" : "Problem with fortune."});
  }
});

module.exports = router;
