var express = require('express'),
    nostra = require('../nostra/nostra');

var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index',
//       {
//         title: 'Nostranode',
//         fortune: nostra.generate()
//       });
// });

module.exports = router;
