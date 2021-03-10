const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    "firstname": String,
    "dob": String,
    "address": String,
    "phone": String,
    "state": String,
    "zip": String,
    "email": String,
    "gender": String,
    "userType": String
});

const users = mongoose.model('users', usersSchema);

module.exports = users;