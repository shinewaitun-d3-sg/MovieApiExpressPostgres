const User = require("../models").User;

const signUp = async (data) => {
  try {
    const res = await User.create(data);
    return res;
  } catch (error) {
    return error;
  }
};

const signIn = async (data) => {
  try {
    const res = await User.findOne({
      where: { email: data.email, password: data.password },
    });
    if (res === null) {
      return "User not found!";
    }
    return res;
  } catch (error) {
    return error;
  }
};

module.exports = {
  signUp,
  signIn,
};
