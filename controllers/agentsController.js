const Agents = require('../models/agentsSchema');
const csvtojson = require('csvtojson');

const agentRecord = async (req, res, next) => {
    const file = req.files.agents;
    console.log(file);

    file.mv("./uploads/" + file.name, (err, result) => {
        if(err) {
            console.log(err)
        }else {
            console.log("File uploaded successfully!!");
        }
    });

    try {
        const csvFilePath = './uploads/' + req.files.agents.name;
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        const result = await Agents.insertMany(jsonArray, { ordered: false });
        res.json({
            message: "Record saved successfully!!",
            data: result
        })
    }catch (e) {
        console.log(e);
    }
}

module.exports = { agentRecord }