var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/MSc_Project', function(req, res, next) {
  res.render('MSc_Project', { title: 'MSc_Project' });
});

module.exports = router;
