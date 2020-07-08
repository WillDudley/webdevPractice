var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timeline', function(req, res, next) {
  res.render('timeline', { title: 'Express' });
});

router.get('/goals', function (req, res, next) {
  res.render('goals', { title: 'Express' })
})

module.exports = router;
