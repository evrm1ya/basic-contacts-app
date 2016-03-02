
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mustacheExpress = require('mustache-express');
var Contact = require('./models/contact');
var contactsRouter = require('./routes/contacts-router');
var app = express();
var port = process.env.PORT || 3000;
var contactsHtmlController = require('./controllers/htmlController');
var contactsApiController = require('./controllers/apiController');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// contacts routes off base url
app.use('/contacts', contactsRouter);

// set up mustache
app.engine('mustache', mustacheExpress());
app.set('views', __dirname + '/views');
app.set('view engine', 'mustache');

// mongoose connection to contacts-test DB
mongoose.connect('mongodb://localhost:27017/contactstest');

var contactsDB = mongoose.connection;

contactsDB.on('error', console.error.bind(console, 'connection error:'));
contactsDB.once('open', function() {
  console.log("Connected to contactstest db");
});

// Contacts HTML rendering functionality
contactsHtmlController(app);
// Contacts API related functionality
contactsApiController(app);

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

