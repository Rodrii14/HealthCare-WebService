const mongoose = require('mongoose');
const schema = mongoose.Schema;

const videoSchema = new schema({
    channelPhoto:{
        //LINK
        type: String, 
        required: true
    },
    channelName:{
        type: String,
        required: true,
    },
    videoBanner:{
        //LINK
        type: String, 
        required: true
    },
    tittle:{
        type: String, 
        required: true,
        uppercase: true
    },
    link:{
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Video", videoSchema);
