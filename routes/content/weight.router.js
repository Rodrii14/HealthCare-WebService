const express = require('express');
const route = express.Router();

// DATA CONTROLLERS IMPORTS
const weightControllers = require('../../controllers/content/weight.controllers');

// AUTHENTICATION IMPORTS
const { authUser } = require('../../middlewares/auth.middlewares');

// DATA VALIDATORS IMPORTS
const validationsRules = require('../../validators/rules.validators');
const verifyRules = require('../../validators/index.validators');

/* http://localhost:3500/HC/weight/ */
route.post('/',
    authUser,
    validationsRules.dataValidations,
    verifyRules,
    weightControllers.updateWeight
);

route.get('/',
    authUser,
    weightControllers.getWeight
);

module.exports = route;
