const PolicyInformations = require('../models/policyInformationsSchema');

const searchPolicy = (req, res, next) => {
    const name = req.body.name;
    PolicyInformations.aggregate([
        {
            $match: {"firstname": `${name}`}
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

module.exports = { searchPolicy }