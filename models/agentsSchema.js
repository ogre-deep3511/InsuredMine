const mongoose = require('mongoose');

const agentsSchema = new mongoose.Schema({
    "agent": String
});

const agents = mongoose.model('agents', agentsSchema);

module.exports = agents;