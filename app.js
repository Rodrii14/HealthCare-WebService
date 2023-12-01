const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const database = require('./configuration/database.configuration');
const mainRouter = require('./routes/index.router');

const app = express();
database.connect();

//Logger for request
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //Cookies

/* ROUTERS */

app.use(express.static(path.join(__dirname, 'public')));

/* http://localhost:3500/HC */
app.use('/HC', mainRouter);

module.exports = app;
