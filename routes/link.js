const express = require('express');
const router = express.Router();
const link_controller = require('../controllers/linkController');

/* Login handle on POST */
router.post('/uploadLink', link_controller.link_post);

router.get('/uploadLink', link_controller.link_get);

router.delete('/:id', link_controller.delete_link);

module.exports = router;