const express = require('express');
const route = express.Router();

//VIDEO CONTROLLER IMPORT
const video = require('../controllers/video.controllers');

//VERIFICATION RULES IMPORT
const verifyRules = require('../validators/index.validators');
const { videoValidations, idValidations } = require('../validators/rules.validators');

/* http://localhost:3500/HC/videos/ */
route.post('/',
    videoValidations,
    verifyRules,
    video.create
);

route.get(['/:id', '/'],
    idValidations,
    verifyRules,
    video.find
);

module.exports = route;