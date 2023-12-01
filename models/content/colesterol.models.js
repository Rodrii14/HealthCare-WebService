const mongoose = require('mongoose');
const schema = mongoose.Schema;

const colesterolSchema = new schema({
    user: {
        type: String
    },
    values: {
        type: Number
    },
    date: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Colesterol', colesterolSchema);