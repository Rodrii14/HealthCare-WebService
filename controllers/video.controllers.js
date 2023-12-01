const Video = require('../models/video.models');
const Codes = require('../utilities/Codes.utilities');

const videoControllers = {};

videoControllers.create = async (req, res, next) => {
    try {
        const { channelPhoto, channelName, videoBanner,
            tittle, link } = req.body;

        const video = new Video({
            channelPhoto: channelPhoto,
            channelName: channelName,
            videoBanner: videoBanner,
            tittle: tittle,
            link: link
        })

        const savedVideo = await video.save();

        if (!savedVideo) {
            return Codes.code409(res);
        }

        return Codes.code201(res);

    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

videoControllers.find = async (req, res, next) => {
    try {
        const { id } = req.params;

        /* IF URL HAS NO ID -> RETURNS ALL VIDEOS */
        if (!id) {
            const videos = await Video.find();

            if (!videos) {
                return Codes.code404;
            }

            return res.status(200).json(videos);
        }

        /* IF URL HAS AN ID -> RETURNS A VIDEO */
        const video = await Video.findById(id);

        if (!video) {
            return Codes.code404(res);
        }

        return res.status(200).json(video);

    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

module.exports = videoControllers;