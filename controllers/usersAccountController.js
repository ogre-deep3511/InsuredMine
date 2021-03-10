const UserAccount = require('../models/usersAccountSchema');
const csvtojson = require('csvtojson');

const userAccountRecord = async (req, res, next) => {
    const file = req.files.usersaccount;
    // console.log(file);

    file.mv("./uploads/" + file.name, (err, result) => {
        if(err) {
            console.log(err)
        }else {
            console.log("File uploaded successfully!!");
        }
    });

    try {
        const csvFilePath = './uploads/' + req.files.usersaccount.name;
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        const result = await UserAccount.insertMany(jsonArray, { ordered: false });
        res.json({
            message: "Record saved successfully!!",
            data: result
        })
    }catch (e) {
        console.log(e);
    }
}

module.exports = { userAccountRecord }
