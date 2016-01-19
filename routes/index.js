var express = require('express'),
    nostra = require('nostra');

var router = express.Router();


///* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Nostranode',
        fortune: nostra.generate()
      });
});

/* Send all requests to ng */
//router.get('*', function(req, res, next) {
//  res.render('index',
//      {
//        title: 'Nostranode',
//        fortune: nostra.generate()
//      });
//});
// Or use the sendfile like this?
//app.get('*', function(req, res) {
//  res.sendfile('./public/views/index.html'); // load our public/index.html file
//});

module.exports = router;
