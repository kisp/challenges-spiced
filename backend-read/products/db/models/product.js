import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
});

export default mongoose.models.Product || mongoose.model("Product", schema);
