const express = require('express');
const route = express.Router();

//DATA CONTROLLERS IMPORTS
const bodyControllers = require('../../controllers/content/body.controllers');

//AUTHENTICATION IMPORTS
const { authUser } = require('../../middlewares/auth.middlewares');

//DATA VALIDATORS IMPORTS
const validationsRules = require('../../validators/rules.validators');
const verifyRules = require('../../validators/index.validators');

/* http://localhost:3500/HC/body/ */
route.post('/',
    authUser,
    validationsRules.dataValidations,
    verifyRules,
    bodyControllers.updateBody
);

route.get('/',
    authUser,
    bodyControllers.getBody
);

module.exports = route;