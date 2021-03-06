const mongoose = require('mongoose');
const Person = mongoose.model('Person'); // We are retrieving this Schema from our Models, named 'Person'
const people = require('../controller/people.js');

module.exports = function(app) {
    app.get('/', function(req,res){
        people.find(req, res);
    });

    app.get('/new/:name/', function(req,res){
        people.new(req, res);
    });

    app.get('/:name/', function(req,res){
        people.show(req, res);
    });

    app.get('/remove/:name/', function(req,res){
        people.remove(req, res);
    });

};