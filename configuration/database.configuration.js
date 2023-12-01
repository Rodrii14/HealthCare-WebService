const debug = require('debug')('Service: DB information');
const mongoose = require('mongoose');

const dbUri = process.env.DBURI;

const configuration = {};

configuration.connect = async() =>{
    try {
        await mongoose.connect(dbUri);
        debug('Connected to database');
    } catch (error) {
        console.error(error);
        debug('Couldnt connect to database');
        process.exit(1);
    }
}

configuration.disconnect = async() =>{
    try {
        await mongoose.disconnect();
        debug('Disconnected from database');
    } catch (error) {
        console.error(error);
        debug('Couldnt disconnect from database');
    }
}

module.exports = configuration;