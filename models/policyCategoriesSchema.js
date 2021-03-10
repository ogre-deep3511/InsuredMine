const mongoose = require('mongoose');

const policyCategoriesSchema = new mongoose.Schema({
    "category_name": String
});

const policyCategory = mongoose.model('policy-categories', policyCategoriesSchema);

module.exports = policyCategory;