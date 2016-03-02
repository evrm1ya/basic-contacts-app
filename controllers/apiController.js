
var Contact = require('../models/contact');

module.exports = function(app) {
  var contactCache = {};
  app.get('/contacts/:id', function(req, res) {
    var contactID =  req.params.id;
    Contact.findOne({"_id": contactID}, function(err, contact) {
      if (err) {
        console.log(err);
      }
      console.log(contact);
      res.render('single-contact', {contact: contact});
      contactCache[contactID] = contact;
      console.log('contact cache: ', contactCache);
    });
  });

  app.get('/contacts/update/:id', function(req, res) {
    var contactID = req.params.id;
    if (contactCache[contactID]) {
      res.render('update-contact', {contact: contactCache[contactID]});
    }
  });
};
