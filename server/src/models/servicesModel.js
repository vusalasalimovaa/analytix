import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    details: {
        type: Array,
        required: true,
    } 
  },
  { collection: "Services", timestamps: true }
);

const Services = mongoose.model("Services", servicesSchema);
export default Services;
