const mongoose = require('mongoose');

const policyCarriersSchema = new mongoose.Schema({
    "company_name": String
});

const policyCarriers = mongoose.model('policy-carriers', policyCarriersSchema);

module.exports = policyCarriers;