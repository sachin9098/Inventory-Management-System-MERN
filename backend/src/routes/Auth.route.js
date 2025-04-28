    const AuthController = require("../controllers/Auth.controller")
    const Validation = require("../middlewares/Validation");
    const AuthValidation = require("../validations/Auth.validation")
    const Authentication = require("../middlewares/Authentication")



  
    const router = require("express").Router();
   
    router.post("/register", AuthValidation.RegisterUser, Validation, AuthController.RegisterUser);
    router.post("/login", AuthValidation.LoginUser, Validation, AuthController.LoginUser);
    router.get("/profile", Authentication, AuthController.ProfileController);

    module.exports = router;