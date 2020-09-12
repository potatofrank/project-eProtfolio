const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/music', function(req, res) {
  res.render('music');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/userpage', function(req, res) {
  res.render('userpage');
});

router.get('/register', function(req, res) {
  res.render('register');
});

module.exports = router;
