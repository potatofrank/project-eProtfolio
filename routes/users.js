const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require('passport');
const User = require("../models/user");
const auth_controller = require('../controllers/authController');
const message_controller = require('../controllers/messageController');

/* Login handle on POST */
router.post('/login', auth_controller.login_post);

/* Login handle on music page on POST */
router.post('/musicLogin', auth_controller.music_login_post);

/* Display Login page on GET */
router.get('/login', auth_controller.login_get);

/* Register handle on POST */
router.post('/register', auth_controller.register_post);

/* Register handle on POST */
router.post('/messages', message_controller.message_post);

/* Register handle on GET */
router.get('/mymessages', message_controller.message_get);

/* Logout handle on GET */
router.get('/logout', auth_controller.logout_get);

/* Logout handle on GET */
router.get('/register', auth_controller.register_get);

router.delete('/:id', message_controller.delete_message);

module.exports = router;
