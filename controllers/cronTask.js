const One = require('../models/oneSchema');
const Two = require('../models/twoSchema');

const functionToCopy = async (id) => {
    await One.aggregate([
        {
            $match: {"_id": id}
        },
        {
            $project: {"_id": 0, "message": 1}
        }
    ], async (err, data) => {
        if(err) {
            console.log(err)
        }else {
            // console.log(data);
            await Two.create(data[0]);
            console.log("Data copied successfully");
        }
    })
}

module.exports = { functionToCopy }