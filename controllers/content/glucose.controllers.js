const Glucose = require('../../models/content/glucose.models');
const Codes = require('../../utilities/Codes.utilities');
const glucoseControllers = {};

glucoseControllers.updateGlucose = async (req, res, next) => {
    try {
        const { values } = req.body;
        const user = req.user;
        const _date = new Date();
        const date = _date.toLocaleDateString();

        await Glucose.findOneAndDelete({ user: user, date: date });

        const glucose = new Glucose({
            user: user,
            values: values,
            date: date
        });

        await glucose.save();
        return res.status(200).json({ message: 'Saved successfully' });
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

glucoseControllers.getGlucose = async (req, res, next) => {
    try {
        const user = req.user;

        const glucose = await Glucose.find({ user: user });

        if (!glucose) {
            return Codes.code404(res);
        }

        return res.status(200).json(glucose);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

module.exports = glucoseControllers;