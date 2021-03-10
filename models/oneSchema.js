const mongoose = require('mongoose');

const oneSchema = new mongoose.Schema({
    "message": String,
    "date": Date
});

const one = mongoose.model('ones', oneSchema);

module.exports = one;