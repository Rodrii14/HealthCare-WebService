const express = require('express');
const route = express.Router();

// DATA CONTROLLERS IMPORTS
const pressureControllers = require('../../controllers/content/pressure.controllers');

// AUTHENTICATION IMPORTS
const { authUser } = require('../../middlewares/auth.middlewares');

// DATA VALIDATORS IMPORTS
const validationsRules = require('../../validators/rules.validators');
const verifyRules = require('../../validators/index.validators');

/* http://localhost:3500/HC/pressure/ */
route.post('/',
    authUser,
    validationsRules.pressureValidations,
    verifyRules,
    pressureControllers.updatePressure
);

route.get('/',
    authUser,
    pressureControllers.getPressure
);

route.delete('/:id',
    authUser,
    pressureControllers.deletePressure
);

module.exports = route;
