import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.configDotenv({
  path: ".env",
});

import connectDB from "../src/db.js";
const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error ", error);
      throw error;
    });
    app.listen(port, () => {
      console.log("Server is running at ", port);
    });
  })
  .catch((err) => {
    console.log("Mongo DB conncetion failed ", err);
  });
