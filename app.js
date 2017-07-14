const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/api_1955');

const PeopleSchema = new mongoose.Schema({
    name: String,
});

mongoose.model('Person', PeopleSchema); // We are setting this Schema in our Models as 'User'
const Person = mongoose.model('Person'); // We are retrieving this Schema from our Models, named 'User'

// Use native promises
mongoose.Promise = global.Promise;

const routes_setter = require('./server/config/routes.js');
routes_setter(app);

port = 8000;
app.listen(port, function(){
    console.log("Listening on port:", port);
});

