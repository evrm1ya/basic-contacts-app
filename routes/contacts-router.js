
var express = require('express');
var router = express.Router();
var contactPoster = require('../lib/contact-poster');
var contactUpdater = require('../lib/contact-updater');

/**
 * Contacts Routes
 */

router.route('/add')
  .post(function(req, res) {
    contactPoster(req, res, 'contact-added');
  });

router.route('/update/:id')
  .post(function(req, res) {
    contactUpdater(req, res, 'contact-updated');
  });

module.exports = router;


