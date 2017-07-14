const mongoose = require('mongoose');
const Person = mongoose.model('Person'); // We are retrieving this Schema from our Models, named 'Person'


module.exports = {
    find: function(req,res){
        Person.find({}, function(err, users) {
        // This is the method that finds all of the users from the database
        // Notice how the first parameter is the options for what to find and the second is the
        //   callback function that has an error (if any) and all of the users
        // Keep in mind that everything you want to do AFTER you get the users from the database must
        //   happen inside of this callback for it to be synchronous 
        // Make sure you handle the case when there is an error, as well as the case when there is no error
        if(err) {
            console.log('something went wrong querying db for all users');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully queried DB for all users!');
        }
        res.json(JSON.stringify({users: users}));
        });
    },
    new: function(req,res){
        console.log("PARAMS DATA", req.params);
        // create a new User with the name corresponding to those from req.params
        var person = new Person({name: req.params.name});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        person.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        }
        });
    },

    show: function(req,res){
        console.log("PARAMS DATA", req.params);
        // create a new User with the name corresponding to those from req.params
        Person.findOne({name: req.params.name}, function(err, person) { 
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.json({person: person});
        }
        });
    },

    remove: function(req,res){
        console.log("PARAMS DATA", req.params);
        // create a new User with the name corresponding to those from req.params
        Person.remove({name: req.params.name}, function(err) { 
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        }
        });
    },
};