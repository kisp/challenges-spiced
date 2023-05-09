import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const requestJson = request.body;
      const { name, description, price, currency } = request.body;
      const product = new Product();
      product.name = name;
      product.description = description;
      product.price = price;
      product.currency = currency;
      await product.save();
      return response.status(201).json(product);
    } catch (error) {
      return response.status(422).json(error);
    }
  }

  response.status(404).json({ message: "not found" });
}
