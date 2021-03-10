const PolicyInformations = require('../models/policyInformationsSchema');

const userPolicy = (req, res, next) => {
    const name = req.body.name;
    PolicyInformations.aggregate([
        {
            $project: 
                     {
                            "_id": 0,
                            "policy_number": 1,
                            "firstname": 1
                     }
        }
    ], (err, data) => {
        if(err) {
            res.json({
                error: err
            })
        }else {
            res.json({
                data: data
            })
        }
    })
}

module.exports = { userPolicy }