const mongoose = require('mongoose');
const debug = require('debug')('Service: Encrypting password');
const schema = mongoose.Schema;

//IMPORT CRYPTO LIBRARY
const crypto = require('crypto');

const userSchema = new schema({
    profilePhoto: {
        type: String,
        required: false
    },
    fullName: {
        type: String,
        required: true,
        trim: false,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    tokens: {
        type: [String],
        default: []
    }
}, { timestamps: true });

userSchema.methods = {
    encryptPassword: function (password) {
        try {
            if (!password) {
                return "";
            }

            const encryptedPassword = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
                .toString("hex");

            return encryptedPassword;

        } catch (error) {
            debug({ error });
        }
    },

    createSalt: function () {
        return crypto.randomBytes(16).toString();
    },

    comparePasswords: function (password) {
        return this.hashPassword === this.encryptPassword(password);
    },
    getAge: function (dateBirth) {
        const actualDate = new Date();
        const date = new Date(dateBirth);
        const year = actualDate.getFullYear() - date.getFullYear();
        const month = actualDate.getMonth() - date.getMonth();

        if (month >= 0) {
            return year;
        } else {
            return year - 1;
        }
    }
}

userSchema.virtual("password").set(function (password) {
    this.salt = this.createSalt(),
        this.hashPassword = this.encryptPassword(password);
});
userSchema.virtual("dateBirth").set(function (dateBirth) {
    this.age = this.getAge(dateBirth);
});

module.exports = mongoose.model("User", userSchema);