const express = require('express');
const route = express.Router();

//DATA CONTROLLERS IMPORTS
const muscularControllers = require('../../controllers/content/muscular.controllers');

//AUTHENTICATION IMPORTS
const { authUser } = require('../../middlewares/auth.middlewares');

//DATA VALIDATORS IMPORTS
const validationsRules = require('../../validators/rules.validators');
const verifyRules = require('../../validators/index.validators');

/* http://localhost:3500/HC/muscular/ */
route.post('/',
    authUser,
    validationsRules.dataValidations,
    verifyRules,
    muscularControllers.updateMuscular
);

route.get('/',
    authUser,
    muscularControllers.getMuscular
);

route.delete('/:id',
    authUser,
    muscularControllers.deleteMuscular
);

module.exports = route;