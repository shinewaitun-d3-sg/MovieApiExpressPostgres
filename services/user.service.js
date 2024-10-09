const User = require("../models").User;
const Role = require("../models").Role;

const signUp = async (data) => {
  try {
    const createdUser = await User.create(data);
    const roles = await Role.findAll({ where: { name: "USER" } });
    if (roles.length !== data.roleIds.length) {
      throw new Error("Role IDs are invalid.");
    }
    await createdUser.addRoles(roles);

    return createdUser;
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
