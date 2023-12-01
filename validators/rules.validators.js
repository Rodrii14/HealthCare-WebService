const { body, param } = require('express-validator');

const validations = {};

validations.passwordRegexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

validations.videoValidations = [
    body('channelPhoto')
        .notEmpty().withMessage('Channel photo is required')
        .isURL().withMessage('Channel photo must be an URL'),

    body('channelName')
        .notEmpty().withMessage('Channel name is required'),

    body('videoBanner')
        .notEmpty().withMessage('Video Banner is required')
        .isURL().withMessage('Video Banner must be an URL'),

    body('tittle')
        .notEmpty().withMessage('Tittle is required'),

    body('link')
        .notEmpty().withMessage('Video link is required')
        .isURL().withMessage('Video link must be an URL'),

    //RULE 6 ----> FIELD 6
    /*TODO: VISUALISATION VALIDATIONS*/
];

validations.idValidations = [
    param('id')
        .optional()
        .isMongoId().withMessage('ID must be a Mongo ID')
];

validations.createUserValidations = [
    body('profilePhoto')
        .optional()
        .isURL().withMessage('Profile photo must be an URL'),

    body('fullName')
        .notEmpty().withMessage('Full name is required'),

    body('userName')
        .notEmpty().withMessage('User name is required')
        .isLength({ min: 2, max: 32 }),

    body('email')
        .notEmpty().withMessage('Tittle is required')
        .isEmail().withMessage('Email format incorrect'),

    body('dateBirth')
        .notEmpty().withMessage('birth date is required')
        .isISO8601().withMessage('Date format incorrect'),

    body('gender')
        .notEmpty().withMessage('gender is required'),

    body('password')
        .notEmpty().withMessage('password is required')
        .matches(validations.passwordRegexp).withMessage('Password format incorrect'),

];

validations.updateUserValidations = [
    body('profilePhoto')
        .optional()
        .isURL().withMessage('Profile photo must be an URL'),
    body('userName')
        .notEmpty().withMessage('User name is required')
        .isLength({ min: 2, max: 32 }),
];

validations.dataValidations = [
    body('values')
    .notEmpty().withMessage('Value is required')
    .isNumeric().withMessage('Value format incorrect')
];

validations.pressureValidations = [
    body('sys')
    .notEmpty().withMessage('Value is required')
    .isNumeric().withMessage('Value format incorrect'),
    body('dis')
    .notEmpty().withMessage('Value is required')
    .isNumeric().withMessage('Value format incorrect')
];

module.exports = validations;