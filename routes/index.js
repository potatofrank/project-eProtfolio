const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const { ensureMusicAuthenticated } = require('../config/authMusic');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {user:req.user});
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/music', ensureMusicAuthenticated, function(req, res) {
  res.render('music');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/dashboard', ensureAuthenticated, function(req, res) {
  res.render('dashboard', {user:req.user});
});

router.get('/musicLogin', function(req, res) {
  res.render('musicLogin', {user:req.user});
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.get('/upload', function(req, res) {
  res.render('upload');
});

module.exports = router;
