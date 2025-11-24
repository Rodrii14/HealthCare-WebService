const Muscular = require('../../models/content/muscular.models');
const Codes = require('../../utilities/Codes.utilities');
const muscularControllers = {};

muscularControllers.updateMuscular = async (req, res, next) => {
    try {
        const { values } = req.body;
        const user = req.user;
        const _date = new Date();
        const date = _date.toLocaleDateString();

        await Muscular.findOneAndDelete({ user: user, date: date });

        const muscular = new Muscular({
            user: user,
            values: values,
            date: date
        });

        await muscular.save();
        return res.status(200).json({ message: 'Saved successfully' });
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

muscularControllers.getMuscular = async (req, res, next) => {
    try {
        const user = req.user

        const muscular = await Muscular.find({ user: user });

        if (!muscular) {
            return Codes.code404(res);
        }

        return res.status(200).json(muscular);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

muscularControllers.deleteMuscular = async (req, res, next) => {
    try {
        const { id } = req.params;

        const muscular = await Muscular.findOneAndDelete({ _id: id });
        if (!muscular) {
            console.error("muscularControllers.deleteMuscular: record not found for deletion");
            return Codes.code404(res);
        }
        return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

module.exports = muscularControllers; 