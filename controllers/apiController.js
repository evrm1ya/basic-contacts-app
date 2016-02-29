
var Contact = require('../models/contact');

module.exports = function(app) {
  app.get('/contacts/:id', function(req, res) {
    var contactID =  req.params.id;
    Contact.findOne({"_id": contactID}, function(err, contact) {
      if (err) {
        console.log(err);
      }
      console.log(contact);
      res.render('single-contact', {contact: contact});
    });
  });
};
