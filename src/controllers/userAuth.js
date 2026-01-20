import userAuth from "../services/userAuth.js";

const userRegister = async (req, res) => {
  try {
    const input = req.body;
   
    if (!input.email) {
      return res.status(400).send("Email is required");
    }
    if (!input.password) {
      return res.status(400).send("Password is required");
    }

    const createdUser = await userAuth.userRegister(req.body);

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default { userRegister };
