// require("dotenv").config({path: './env'}); conflict the consistency of code
// Updated version
import dotenv from "dotenv";

// import mongoose from "mongoose";   use in below commented code
// import DB_Name from "./constants";

import connectDB from "./db/index.js";

dotenv.config(); //configure the dotenv

connectDB();

/*import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    app.on("error", () => {
      console.log("ERRR: ", error);
      throw error;
      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    });
  } catch (error) {
    console.error("Error : ", error);
    throw err;
  }
})();

*/
