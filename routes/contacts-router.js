
var express = require('express');
var router = express.Router();
var contactPoster = require('../lib/contact-poster');

/**
 * Contacts Routes
 */

router.route('/add')
  .post(function(req, res) {
    contactPoster(req, res);
    res.render('contact-added');
  });

module.exports = router;


