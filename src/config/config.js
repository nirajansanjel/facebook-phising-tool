import dotenv from "dotenv";
dotenv.config();

const config = {
  MONGODB: process.env.MONGODB_URL,
};
export default config;
