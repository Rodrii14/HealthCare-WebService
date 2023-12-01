const express = require('express');
const route = express.Router();

//DATA CONTROLLERS IMPORTS
const colesterolControllers = require('../../controllers/content/colesterol.controllers');

//AUTHENTICATION IMPORTS
const { authUser } = require('../../middlewares/auth.middlewares');

//DATA VALIDATORS IMPORTS
const validationsRules = require('../../validators/rules.validators');
const verifyRules = require('../../validators/index.validators');

/* http://localhost:3500/HC/colesterol/ */
route.post('/',
    authUser,
    validationsRules.dataValidations,
    verifyRules,
    colesterolControllers.updateColesterol
);

route.get('/',
    authUser,
    colesterolControllers.getColesterol
);

module.exports = route;