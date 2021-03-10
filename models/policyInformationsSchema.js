const mongoose = require('mongoose');

const policyInformationsSchema = new mongoose.Schema({
    "policy_number": String,
    "policy_start_date": String,
    "policy_end_date": String,
    "category_name": String,
    "firstname": String
});

const policyInformation = mongoose.model('policy-informations', policyInformationsSchema);

module.exports = policyInformation;