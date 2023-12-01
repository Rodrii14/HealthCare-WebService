const mongoose = require('mongoose');
const schema = mongoose.Schema;

const weightSchema = new schema({
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

module.exports = mongoose.model("Weight", weightSchema);