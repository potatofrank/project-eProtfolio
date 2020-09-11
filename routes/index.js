var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/campus_life', function(req, res, next) {
  res.render('campus life');
});

router.get('/skills', function(req, res, next) {
  res.render('skills');
});

router.get('/projects', function(req, res, next) {
  res.render('projects');
});

router.get('/music', function(req, res, next) {
  res.render('music');
});

module.exports = router;
