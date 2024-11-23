import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: true,
    },
  },
  { collection: "Portfolio", timestamps: true }
);



const Portfolio = mongoose.model("Portfolio", portfolioSchema)
export default Portfolio
