const express = require('express');
const route = express.Router();

//DATA CONTROLLERS IMPORTS
const heightControllers = require('../../controllers/content/height.controllers');

//AUTHENTICATION IMPORTS
const { authUser } = require('../../middlewares/auth.middlewares');

//DATA VALIDATORS IMPORTS
const validationsRules = require('../../validators/rules.validators');
const verifyRules = require('../../validators/index.validators');

/* http://localhost:3500/HC/height/ */
route.post('/',
    authUser,
    validationsRules.dataValidations,
    verifyRules,
    heightControllers.updateHeight
);

route.get('/',
    authUser,
    heightControllers.getHeight
);

module.exports = route;