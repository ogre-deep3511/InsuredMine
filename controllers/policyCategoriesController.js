const PolicyCategories = require('../models/policyCategoriesSchema');

const csvtojson = require('csvtojson');

const policyCategoriesRecord = async (req, res, next) => {
    const file = req.files.policycategories;
    // console.log(file);

    file.mv("./uploads/" + file.name, (err, result) => {
        if(err) {
            console.log(err)
        }else {
            console.log("File uploaded successfully!!");
        }
    });

    try {
        const csvFilePath = './uploads/' + req.files.policycategories.name;
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        const result = await PolicyCategories.insertMany(jsonArray, { ordered: false });
        res.json({
            message: "Record saved successfully!!",
            data: result
        })
    }catch (e) {
        console.log(e);
    }
}

module.exports = { policyCategoriesRecord }