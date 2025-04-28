const {body} = require("express-validator");

class AuthValidation{
    static RegisterUser = [

          body("name").notEmpty().withMessage("name can not be empty"),
          body("email").isEmail().withMessage("Email must be valid"),
          body("password").notEmpty().withMessage("password is mandatory").isLength({min:6}).withMessage("password includes minimum 6 characters")
    ]
    static LoginUser = [
        body("name").notEmpty().withMessage("name can not be empty"),
        body("email").isEmail().withMessage("Email must be valid"),
        body("password").notEmpty().withMessage("password is mandatory").isLength({min:6}).withMessage("password includes minimum 6 characters")
  ]
}

module.exports = AuthValidation