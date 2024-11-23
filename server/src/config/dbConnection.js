import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Server connected Mongoose...");
  })
  .catch(() => {
    console.log("Server not connected Mongoose...");
  });
