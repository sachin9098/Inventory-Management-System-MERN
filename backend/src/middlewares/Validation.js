const { validationResult } = require("express-validator")
const ApiError = require("../utils/ApiError");



const Validation = (req,res,next)=>{
    try{

        const result = validationResult(req);
        if(!result.isEmpty()){
                throw new ApiError(201, result.array()[0].msg)
                return
        }
        next();
    }
    catch(error){
        next(error)
    }
}

module.exports = Validation