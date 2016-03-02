
var Contact = require('../models/contact');
var postOrUpdatePaths = require('./post-or-update-paths');
var saveContact = require('./save-contact');

module.exports = function(req, res, view) {
  var contactID = req.params.id;
  Contact.findById(contactID, function(err, contact) {
    if (err)
      console.log(err);
    postOrUpdatePaths(contact, req);
    saveContact(contact, res, view);
  });
};
