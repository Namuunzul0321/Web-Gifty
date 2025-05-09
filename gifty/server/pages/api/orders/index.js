import dbConnect from "../../../lib/mongodb";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ message: "Алдаа гарлаа", error: err });
    }
  } else if (req.method === "GET") {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");
    res.status(200).json(orders);
  }
}
