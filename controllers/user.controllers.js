const User = require('../models/user.models');
const { createToken, verifyToken } = require('../utilities/jwt.utilities');
const Codes = require('../utilities/Codes.utilities');

const userControllers = {};

userControllers.Register = async (req, res, next) => {
    try {
        const { fullName, userName, email,
            dateBirth, gender, password } = req.body;

        let user = await User.findOne({ $or: [{ userName: userName }, { email: email }] });
        if (user) {
            return Codes.code409(res);
        }

        user = new User({
            fullName: fullName,
            userName: userName,
            email: email,
            dateBirth: dateBirth,
            gender: gender,
            password: password
        });

        const newToken = await createToken(user.id);

        user["tokens"] = [newToken];

        await user.save();
        return res.status(200).json(newToken);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

userControllers.logIn = async (req, res, next) => {
    try {
        const { identifier, password } = req.body;

        const user = await User.findOne({ $or: [{ userName: identifier }, { email: identifier }] });

        if (!user) {
            return Codes.code404(res);
        }

        if (!user.comparePasswords(password)) {
            return Codes.code409(res);
        }

        //IF EVERYTHING IS OK -> CREATE A NEW SESSION TOKEN
        const newToken = await createToken(user.id);

        //VERIFY TOKENS
        let { tokens } = user;

        tokens = tokens.map(async (_t) => {
            const status = await verifyToken(_t);
            return status ? _t : null;
        })

        tokens = (await Promise.all(tokens)).filter(_t => _t).slice(0, 4);
        tokens = [newToken, ...tokens];

        user["tokens"] = tokens;

        await user.save();
        return res.status(200).json(newToken);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

userControllers.updateUser = async (req, res, next) => {
    try {
        const { userName, profilePhoto } = req.body;

        const userFound = await User.findOne({ userName: userName });
        if (!userFound) {
            return Codes.code404(res);
        }

        userFound["profilePhoto"] = profilePhoto;

        await userFound.save();
        return Codes.code200(res);
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
}

module.exports = userControllers;