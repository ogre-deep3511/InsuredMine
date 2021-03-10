const mongoose = require('mongoose');

const usersAccountSchema = new mongoose.Schema({
    "account_name": String
});

const usersAccount = mongoose.model('user-accounts', usersAccountSchema);

module.exports = usersAccount;