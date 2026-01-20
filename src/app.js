import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import userAuth from "./routes/userAuth.js";
import config from "./config/config.js";

// Database Connection
async function database() {
  try {
    const status = await mongoose.connect(config.MONGODB);
    console.log(`Mongo DB connected :${status.connection.host}`);
  } catch (error) {
    process.exit(1);
  }
}
const app = express();
app.use(cors());
database();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: "facebook-phising-backend",
    status: "Running-successfully",
  });
});

app.use("/api/auth", userAuth);

app.listen(5000, () => {
  console.log(`Server running at port 5000}..`);
});
