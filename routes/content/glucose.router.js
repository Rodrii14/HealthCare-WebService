const express = require('express');
const route = express.Router();

//DATA CONTROLLERS IMPORTS
const glucoseControllers = require('../../controllers/content/glucose.controllers');

//AUTHENTICATION IMPORTS
const { authUser } = require('../../middlewares/auth.middlewares');

//DATA VALIDATORS IMPORTS
const validationsRules = require('../../validators/rules.validators');
const verifyRules = require('../../validators/index.validators');

/* http://localhost:3500/HC/glucose/ */
route.post('/',
    authUser,
    validationsRules.dataValidations,
    verifyRules,
    glucoseControllers.updateGlucose
);

route.get('/',
    authUser,
    glucoseControllers.getGlucose
);

route.delete('/:id',
    authUser,
    glucoseControllers.deleteGlucose
);

module.exports = route;