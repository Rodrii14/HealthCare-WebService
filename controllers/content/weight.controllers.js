const Weight = require('../../models/content/weight.models');
const Codes = require('../../utilities/Codes.utilities');
const weightControllers = {};

weightControllers.updateWeight = async (req, res, next) => {
    try {
        const { values } = req.body;
        const user = req.user;
        const _date = new Date();
        const date = _date.toLocaleDateString();

        await Weight.findOneAndDelete({ user: user, date: date });

        const weight = new Weight({
            user: user,
            values: values,
            date: date
        });

        await weight.save();
        return res.status(200).json({ message: 'Saved successfully' });
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

weightControllers.getWeight = async (req, res, next) => {
    try {
        const user = req.user;

        const weight = await Weight.find({ user: user });

        if (!weight) {
            return Codes.code404(res);
        }

        return res.status(200).json(weight);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

module.exports = weightControllers;