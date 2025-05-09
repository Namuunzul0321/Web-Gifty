import dbConnect from "../../../lib/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ message: "Алдаа гарлаа", error: err });
    }
  } else if (req.method === "GET") {
    const products = await Product.find().populate("store");
    res.status(200).json(products);
  }
}
