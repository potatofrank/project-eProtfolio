const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const Link = require("../models/links");
/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {user:req.user});
});

router.get('/dashboard', ensureAuthenticated, function(req, res) {
  res.render('dashboard', {user:req.user});
});

router.get('/messages', function(req, res) {
    res.render('messages', {user:req.user});
});

router.get('/projects', function(req, res) {
  Link.find()
      .lean()
      .then(function (doc) {
        res.render('projects', {links: doc, user:req.user});
      });
});



module.exports = router;
