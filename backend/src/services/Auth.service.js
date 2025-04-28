
const { UserModel, ProfileModel } = require("../models")
const ApiError = require("../utils/ApiError");
const { generatoken } = require("../utils/Token.utils");

class AuthService {
  static async RegisterUser(body) {
    const { name, email, password } = body


    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      throw new ApiError(201, "Email must be a valid @gmail.com address");
    }

    const checkExist = await UserModel.findOne({ email })
    const checkName = await UserModel.findOne({ name })
    const checkpassword = await UserModel.findOne({ password })


    if (checkExist) {
      throw new ApiError(201, "user already resistered")

      return
    }

    const user = await UserModel.create({ name, email, password })

    const token = generatoken(user)
    const refresh_token = generatoken(user, '2d')

    await ProfileModel.create({
      user: user._id,
      refresh_token

    })

    return {
      msg: "user registered successfully",
      token: token
    }

  }

  static async LoginUser(body) {
    const {  email, password } = body

    const checkExist = await UserModel.findOne({ email })


    if (!checkExist) {
      throw new ApiError(500, "user not registered")

      return
    }

    if (password !== checkExist.password) {
      throw new ApiError(201, "password not matched")

      return
    }



    const token = generatoken(checkExist)


    return {
      msg: "user Login successfully",
      token: token
    }

  }



  static async ProfileService(user) {

    const checkExist = await UserModel.findById(user).select("name email");


    if (!checkExist) {
      throw new ApiError(201, "user not registered")

      return
    }

    return {
      msg: "Data fetched",
      user: checkExist
    }

  }
}

module.exports = AuthService