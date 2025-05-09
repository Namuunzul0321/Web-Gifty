import connectToDatabase from "../../../lib/mongodb";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    // GET - бүх захиалгыг авах
    case "GET":
      try {
        const orders = await Order.find({}).populate({
          path: "products.productId",
          select: "name imageUrl",
        });
        res.status(200).json({ success: true, data: orders });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // POST - шинэ захиалга үүсгэх
    case "POST":
      try {
        const order = await Order.create(req.body);
        res.status(201).json({ success: true, data: order });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
