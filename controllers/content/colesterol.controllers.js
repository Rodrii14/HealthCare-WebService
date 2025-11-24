const Colesterol = require('../../models/content/colesterol.models');
const Codes = require('../../utilities/Codes.utilities');

const colesterolControllers = {};

colesterolControllers.updateColesterol = async(req, res, next)=>{
    try {
        const { values } = req.body;
        const user = req.user;
        const _date = new Date();
        const date = _date.toLocaleDateString();

        await Colesterol.findOne({ user: user, date: date });

        const colesterol = new Colesterol({
            user: user,
            values: values,
            date: date,
        });

        await colesterol.save();
        return res.status(200).json({ message: 'Created successfully'});

    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

colesterolControllers.getColesterol = async (req, res, next) => {
    try {
        const user = req.user;
        const colesterol = await Colesterol.find({ user: user });

        if (!colesterol) {
            return Codes.code404(res);
        }

        return res.status(200).json(colesterol);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

colesterolControllers.deleteColesterol = async (req, res, next) => {
    try {
        const { id } = req.params;

        const colesterol = await Colesterol.findOneAndDelete({ _id: id});

        if (!colesterol) {
            console.error("colesterolControllers.deleteColesterol: record not found for deletion");
            return Codes.code404(res);
        }

        return res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

module.exports = colesterolControllers;