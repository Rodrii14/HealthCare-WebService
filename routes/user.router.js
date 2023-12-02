const express = require('express');
const route = express.Router();

//USER CONTROLLER IMPORT
const user = require('../controllers/user.controllers');

//AUTHENTICATION IMPORTS
const { authUser } = require('../middlewares/auth.middlewares');

//VALIDATION RULES IMPORT
const { createUserValidations, updateUserValidations } = require('../validators/rules.validators');
const verifyRules = require('../validators/index.validators');

/* http://localhost:3500/HC/user/ */
route.post('/',
    createUserValidations,
    verifyRules,
    user.Register
);

/* http://localhost:3500/HC/user/config/ */
route.post('/config',
    authUser,
    updateUserValidations,
    verifyRules,
    user.updateUser
)

/* http://localhost:3500/HC/user/ */
route.post('/login',
    user.logIn
);

module.exports = route;