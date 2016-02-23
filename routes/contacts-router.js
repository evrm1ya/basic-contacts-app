
var express = require('express');
var router = express.Router();
var contactPoster = require('../utils/contact-poster');

/**
 * Contacts Routes
 */

router.route('/add')
  .post(function(req, res) {
    contactPoster(req, res);
  });

module.exports = router;


