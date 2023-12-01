const mongoose = require('mongoose');
const schema = mongoose.Schema;

const glucoseSchema = new schema({
    user: {
        type: String
    },
    values: {
        type: Number
    },
    date: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Blood Glucose", glucoseSchema);