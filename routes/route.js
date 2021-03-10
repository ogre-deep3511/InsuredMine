const { userRecord } = require('../controllers/usersController');
const { agentRecord } = require('../controllers/agentsController');
const { userAccountRecord } = require('../controllers/usersAccountController');
const { policyCategoriesRecord } = require('../controllers/policyCategoriesController');
const { policyCarriersRecord } = require('../controllers/policyCarriersController');
const { policyInformationsRecord } = require('../controllers/policyInformationsController');
const { searchPolicy } = require('../controllers/searchPolicyController');
const { userPolicy } = require('../controllers/userPolicyController');
const { taskOne } = require('../controllers/oneController');
const express = require('express');
const router = express.Router();

router.post('/users', userRecord);
router.post('/agents', agentRecord);
router.post('/users-account', userAccountRecord);
router.post('/policy-categories', policyCategoriesRecord);
router.post('/policy-carriers', policyCarriersRecord);
router.post('/policy-informations', policyInformationsRecord);
router.get('/search-policy', searchPolicy);
router.get('/user-policy', userPolicy);
router.post('/task-one', taskOne);

module.exports = router;