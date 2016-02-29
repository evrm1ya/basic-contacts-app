var Contact = require('../models/contact');

module.exports = function(app) {
  app.get('/contacts', function(req, res) {
    Contact.find(function(err, contacts) {
      if(err) {
        res.send(err);
      }
      res.render('contacts', {contacts: contacts});
    });
  });

  app.get('/contacts/add', function(req, res) {
    res.render('add-contact');
  });
}
