import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { id } = req.query;
  await connectToDatabase();

  switch (req.method) {
    // GET - нэг бүтээгдэхүүний мэдээлэл авах
    case "GET":
      try {
        const product = await Product.findById(id).populate(
          "storeId",
          "name location"
        );

        if (!product) {
          return res
            .status(404)
            .json({ success: false, message: "Бүтээгдэхүүн олдсонгүй" });
        }

        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // PUT - бүтээгдэхүүний мэдээлэл шинэчлэх
    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!product) {
          return res
            .status(404)
            .json({ success: false, message: "Бүтээгдэхүүн олдсонгүй" });
        }

        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // DELETE - бүтээгдэхүүн устгах
    case "DELETE":
      try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
          return res
            .status(404)
            .json({ success: false, message: "Бүтээгдэхүүн олдсонгүй" });
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
