const express = require('express');
const router = express.Router();

//ROUTES IMPORT
const videoRoute = require('./video.router');
const userRoute = require('./user.router');
const bodyRoute = require('./content/body.router');
const colesterolRoute = require('./content/colesterol.router');
const glucoseRoute = require('./content/glucose.router');
const muscularRoute = require('./content/muscular.router');
const pressureRoute = require('./content/pressure.router');
const weightRoute = require('./content/weight.router');
const heightRoute = require('./content/height.router');

//ROUTING ROUTES

/* http://localhost:3500/HC/videos */
router.use('/videos', videoRoute);

/* http://localhost:3500/HC/user */
router.use('/user', userRoute);

/* http://localhost:3500/HC/body */
router.use('/body', bodyRoute);

/* http://localhost:3500/HC/colesterol */
router.use('/colesterol', colesterolRoute);

/* http://localhost:3500/HC/glucose */
router.use('/glucose', glucoseRoute);

/* http://localhost:3500/HC/muscular */
router.use('/muscular', muscularRoute);

/* http://localhost:3500/HC/pressure */
router.use('/pressure', pressureRoute);

/* http://localhost:3500/HC/weight */
router.use('/weight', weightRoute);

/* http://localhost:3500/HC/height */
router.use('/height', heightRoute);

module.exports = router;