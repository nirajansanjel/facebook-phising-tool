import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return emailRegex.test(value);
      },
      message: "Invalid Email",
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
 
  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
 
});
const userModel = mongoose.model("User", userSchema);
export default userModel;