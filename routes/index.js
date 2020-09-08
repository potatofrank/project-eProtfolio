const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/campus_life', function(req, res) {
  res.render('campus life');
});

router.get('/skills', function(req, res) {
  res.render('skills');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/music', function(req, res) {
  res.render('music');
});

module.exports = router;
