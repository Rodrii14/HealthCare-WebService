const mongoose = require('mongoose');
const schema = mongoose.Schema;

const heightShema = new schema({
    user: {
        type: String
    },
    values: {
        type: Number,
        required: true
    },
    date: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Height", heightShema);