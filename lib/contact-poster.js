
var Contact = require('../models/contact');
var postOrUpdatePaths = require('./post-or-update-paths');
var saveContact = require('./save-contact');

module.exports = function(req, res, view) {
  var contact = new Contact();
  postOrUpdatePaths(contact, req);
  saveContact(contact, res, view);
};
