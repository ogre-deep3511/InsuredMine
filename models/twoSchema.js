const mongoose = require('mongoose');

const twoSchema = new mongoose.Schema({
    "message": String
});

const two = mongoose.model('twos', twoSchema);

module.exports = two;