const Height = require('../../models/content/height.models');
const Codes = require('../../utilities/Codes.utilities');
const heightControllers = {};

heightControllers.updateHeight = async (req, res, next) => {
    try {
        const { values } = req.body;
        const user = req.user;
        const date = new Date();

        await Height.findOneAndDelete(user, date);

        const height = new Height({
            user: user,
            values: values,
            date: date
        });

        await height.save();
        return res.status(200).json({ message: 'Saved successfully' });
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

heightControllers.getHeight = async (req, res, next) => {
    try {
        const user = req.user;

        const height = await Height.find({ user: user });

        if (!height) {
            return Codes.code404(res);
        }

        return res.status(200).json(height);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

module.exports = heightControllers;