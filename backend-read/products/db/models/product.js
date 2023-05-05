import mongoose from "mongoose";
import "./review";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
  reviews: { type: [mongoose.Schema.Types.ObjectId], ref: "Review" },
});

export default mongoose.models.Product || mongoose.model("Product", schema);
