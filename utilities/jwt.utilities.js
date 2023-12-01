const { SignJWT, jwtVerify } = require('jose'); //Object and a method

const secretKey = new TextEncoder().encode(process.env.SECRET || "secretKeyByDefault");
const expiration = process.env.EXPIRATION || "5m";

const utilities = {};

utilities.createToken = async (id) => {
    const token = await new SignJWT()
        .setProtectedHeader({ alg: "HS256" })
        .setSubject(id)
        .setExpirationTime(expiration)
        .setIssuedAt()
        .sign(secretKey)

    return token;
};

utilities.verifyToken = async (token) => {
    try {
        const { payload } = await jwtVerify(token, secretKey);
        return payload;
    } catch (error) {
        return false;
    }
};

module.exports = utilities;