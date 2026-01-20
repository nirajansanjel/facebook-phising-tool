import userModel from "../models/User.js";

const userRegister = async (data) => {
  const registeredUser = await userModel.create({
    email: data.email,
    password: data.password,
  });
  return registeredUser
};

export default { userRegister };
