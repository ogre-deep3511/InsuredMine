const usage = require('usage');

const CHECK_CPU_USAGE_INTERVAL    = 1000 * 10;  // seconds
const HIGH_CPU_USAGE_LIMIT        = 70;         // percentage

require('dotenv').config();
const fileupload = require('express-fileupload');
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const Users = require('./routes/route');
const Agents = require('./routes/route');
const UsersAccount = require('./routes/route');
const PolicyCategories = require('./routes/route');
const PolicyCarriers = require('./routes/route');
const PolicyInformations = require('./routes/route');
const SearchPolicy = require('./routes/route');
const UserPolicy = require('./routes/route');
const TaskOne = require('./routes/route');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

const port = process.env.PORT || 2021;
mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("Database Connected Successfully!!!");
});

app.use('/api', Users);
app.use('/api', Agents);
app.use('/api', UsersAccount);
app.use('/api', PolicyCategories);
app.use('/api', PolicyCarriers);
app.use('/api', PolicyInformations);
app.use('/api', SearchPolicy);
app.use('/api', UserPolicy);
app.use('/api', TaskOne) 

app.listen(port, () => {
    
    console.log(`Server started on port: ${port}`);

    setInterval(function()
    {
        usage.lookup(process.pid, function(err, result) 
        {
            if(!err)
            {
                if(result.cpu > HIGH_CPU_USAGE_LIMIT)
                {
                    // log
                    console.log('restart due to high cpu usage');

                    // restart because forever will respawn your process
                    process.exit();
                }
            }
        });
    }, CHECK_CPU_USAGE_INTERVAL);

})

