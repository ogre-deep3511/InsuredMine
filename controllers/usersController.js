const fs = require('fs');
const multer = require('multer');
const express= require('express');
const csvtojson = require('csvtojson');
const Users = require('../models/usersSchema');
// var { workerData, parentPort } = require('worker_threads');

console.log('Worker threasd is running');

const userRecord = async (req, res, next) => {
    

    const file = req.files.users;
    file.mv("./uploads/" + file.name, (err, result) => {
        if(err) {
            console.log(err)
        }else {
            console.log("File uploaded successfully!!");
        }
    })

    try {
        const csvFilePath = './uploads/' + req.files.users.name;
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        // console.log(jsonArray);
        // workerData = jsonArray;
        // const users = new Users();
        const result = await Users.insertMany(jsonArray);
        res.json({
            message: "Record saved successfully!!",
            data: result
        })
    }catch(e) {
        console.log(e);
    }
}

module.exports = { userRecord };