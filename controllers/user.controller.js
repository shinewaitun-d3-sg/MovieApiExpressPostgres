const UserService = require("../services/user.service.js");
const { created, error, success } = require("./response.controller.js");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    console.log(req.body);
    const createdUser = await UserService.signUp(req.body);
    console.log(createdUser);
    created(res, createdUser);
  } catch (err) {
    error(res, err);
  }
};

const signIn = async (req, res) => {
  try {
    const user = await UserService.signIn(req.body);
    const token = jwt.sign({ id: user.id, email: user.email }, "secret_key", {
      expiresIn: "1h",
    });
    success(res, { token: token });
  } catch (err) {
    error(res, err);
  }
};

module.exports = {
  signIn,
  signUp,
};
