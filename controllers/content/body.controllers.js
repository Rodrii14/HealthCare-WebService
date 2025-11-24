const Body = require("../../models/content/body.models");
const Codes = require("../../utilities/Codes.utilities");
const bodyControllers = {};

bodyControllers.updateBody = async (req, res, next) => {
  try {
    const { values } = req.body;
    const user = req.user;
    const _date = new Date();
    const date = _date.toLocaleDateString();

    await Body.findOneAndDelete({ user: user, date: date });

    const body = new Body({
      user: user,
      values: values,
      date: date,
    });

    await body.save();
    return res.status(200).json({ message: "Saved successfully" });
  } catch (error) {
    console.error(error);
    return Codes.code500(res);
  }
};

bodyControllers.getBody = async (req, res, next) => {
  try {
    const user = req.user;

    const body = await Body.find({ user: user });

    if (!body) {
      return Codes.code404(res);
    }

    return res.status(200).json(body);
  } catch (error) {
    console.error(error);
    return Codes.code500(res);
  }
};

bodyControllers.deleteBody = async (req, res, next) => {
  try {
    const { id } = req.params;

    const body = await Body.findOneAndDelete({ _id: id });

    if (!body) {
      console.error("bodyControllers.deleteBody: record not found for deletion");
      return Codes.code404(res);
    }
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    return Codes.code500(res);
  }
};

module.exports = bodyControllers;
