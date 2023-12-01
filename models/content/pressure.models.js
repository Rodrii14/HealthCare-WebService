const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pressureSchema = new schema({
    user: {
        type: String
    },
    sys: {
        type: Number
    },
    dis: {
        type: Number
    },
    date: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Pressure", pressureSchema);