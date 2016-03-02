
module.exports = function(contact, req) {
  var paths = contact.getPaths();
  var pathsLength = paths.length;
  for(var i = 0; i < pathsLength; i++) {
    if(req.body[paths[i]] && paths[i] !== '_id' && paths[i] !== '__v') {
      contact[paths[i]] = req.body[paths[i]];
    }
  }
};
