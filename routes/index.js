var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/campus%20life', function(req, res, next) {
  res.render('campuslife', { title: 'Campus Life' });
});
router.get('/Skill', function(req, res, next) {
  res.render('skill', { title: 'Campus Life' });
});

module.exports = router;
