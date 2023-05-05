import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  text: String,
  rating: Number,
});

export default mongoose.models.Review || mongoose.model("Review", schema);
