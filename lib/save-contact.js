
module.exports = function(contact, res, view) {
  contact.save(function(err, contact) {
    if (err) {
      res.send(err)
    }
    res.render(view);
  });
};
