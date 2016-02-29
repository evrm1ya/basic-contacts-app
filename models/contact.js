
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  street: String,
  apt: Number,
  city: String,
  state: String,
  zip: Number 
});

ContactSchema.methods.firstAndLast = function() {
  console.log(this.firstName + ' ' + this.lastName + ' ' + this.email);
};

ContactSchema.method('getPaths', function() {
  var paths = Object.keys(ContactSchema.paths);
  return paths;
});

module.exports = mongoose.model('Contact', ContactSchema);
