import dbConnect from "../../../db/connect";
import Product from "../../../db/models/product";

export default async function handler(request, response) {
  const conn = await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else {
    return response.status(500).json([]);
  }
}
