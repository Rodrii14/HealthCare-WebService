const { validationResult } = require('express-validator');

/* MIDDLEWARE */
module.exports = (req, res, next) =>{

    const results = validationResult(req);

    if(!results.isEmpty()){
        return res.status(400).json({
            error: results.array().map(e=>({
                fields: e.path,
                message: e.msg
            }))
        })
    }
    
    next();
}