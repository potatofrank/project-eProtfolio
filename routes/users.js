const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require('passport');
const User = require("../models/user");
const auth_controller = require('../controllers/authController');

/* Login handle on POST */
router.post('/login', auth_controller.login_post);

/* Display Login page on GET */
router.get('/login', auth_controller.login_get);

/* Register handle on POST */
router.post('/register', auth_controller.register_post);

router.delete("/:userId", (req, res) => {
  const {userId} = req.params;
  User.deleteOne({_id: userId})
      .exec()
      .then(result => {
        res.status(200).json({
          message: "User deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});

module.exports = router;
