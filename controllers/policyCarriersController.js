const PolicyCarriers = require('../models/policyCarriersSchema');
const csvtojson = require('csvtojson');

const policyCarriersRecord = async (req, res, next) => {
    const file = req.files.policycarriers;
    // console.log(file);

    file.mv("./uploads/" + file.name, (err, result) => {
        if(err) {
            console.log(err)
        }else {
            console.log("File uploaded successfully!!");
        }
    });

    try {
        const csvFilePath = './uploads/' + req.files.policycarriers.name;
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        const result = await PolicyCarriers.insertMany(jsonArray, { ordered: false });
        res.json({
            message: "Record saved successfully!!",
            data: result
        })
    }catch (e) {
        console.log(e);
    }
}

module.exports = { policyCarriersRecord }