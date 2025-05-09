import connectToDatabase from "../../../lib/mongodb";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const { id } = req.query;
  await connectToDatabase();

  switch (req.method) {
    // GET - нэг захиалгын мэдээлэл авах
    case "GET":
      try {
        const order = await Order.findById(id).populate({
          path: "products.productId",
          select: "name price imageUrl",
        });

        if (!order) {
          return res
            .status(404)
            .json({ success: false, message: "Захиалга олдсонгүй" });
        }

        res.status(200).json({ success: true, data: order });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // PUT - захиалгын статусыг шинэчлэх
    case "PUT":
      try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!order) {
          return res
            .status(404)
            .json({ success: false, message: "Захиалга олдсонгүй" });
        }

        res.status(200).json({ success: true, data: order });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // DELETE - захиалга устгах
    case "DELETE":
      try {
        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
          return res
            .status(404)
            .json({ success: false, message: "Захиалга олдсонгүй" });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
