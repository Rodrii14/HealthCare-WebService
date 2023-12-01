const Codes = require('../utilities/Codes.utilities');
const { verifyToken } = require('../utilities/jwt.utilities');
const User = require('../models/user.models');

const middlewares = {};

const bearer = "Bearer";

middlewares.authUser = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const [prefix, token] = authorization.split(" ");

        if (prefix !== bearer) {
            return Codes.code409(res);
        }

        if (!token) {
            return Codes.code409(res);
        }

        const payload = await verifyToken(token);
        const userID = payload["sub"];

        const userFound = await User.findById(userID);

        if(!userFound){
            return Codes.code409(res);
        }

        const { tokens } = userFound;
        const tokenStatus = tokens.includes(token);
        
        if(!tokenStatus){
            return Codes.code409(res);
        }

        //AS TOKEN IS VALID, MODIFY THE REQ
        req.user= userID;
        next();
    } catch (error) {
        console.error(error);
        return Codes.code500(res);
    }
};

module.exports = middlewares;