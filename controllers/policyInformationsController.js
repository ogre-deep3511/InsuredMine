const PolicyInformations = require('../models/policyInformationsSchema');

const csvtojson = require('csvtojson');

const policyInformationsRecord = async (req, res, next) => {
    const file = req.files.policyinformations;
    // console.log(file);

    file.mv("./uploads/" + file.name, (err, result) => {
        if(err) {
            console.log(err)
        }else {
            console.log("File uploaded successfully!!");
        }
    });

    try {
        const csvFilePath = './uploads/' + req.files.policyinformations.name;
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        const result = await PolicyInformations.insertMany(jsonArray, { ordered: false });
        res.json({
            message: "Record saved successfully!!",
            data: result
        })
    }catch (e) {
        console.log(e);
    }
}

module.exports = { policyInformationsRecord }