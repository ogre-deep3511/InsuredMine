const One = require('../models/oneSchema');
const cron = require('node-cron');
const { functionToCopy } = require('../controllers/cronTask');

const taskOne = async (req, res, next) => {
    try {
        const doc = req.body;
       
        const result = await One.create(doc);

        const newDataId = result["_id"];

        // console.log(typeof newDataId);

        let scheduledCompleteDate = result["date"];
        let year = scheduledCompleteDate.getFullYear();
        let month = scheduledCompleteDate.getMonth() + 1;
        let date = scheduledCompleteDate.getDate();

        // console.log(year + "-" + month + "-" + date);

        let cronString = '*/5 * * * * *';
        // let cronString = `0 0 0 ${date} ${month} *`;
        // console.log(cronString);

        cron.schedule(cronString, async () => {
            functionToCopy(newDataId);
            // console.log("Running in cron");
        })

        res.json({
            data: result
        })
    }catch(e) {
        console.log(e);
    }
}

module.exports = { taskOne }