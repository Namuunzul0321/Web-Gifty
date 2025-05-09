import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    // GET - бүх бүтээгдэхүүнийг авах
    case "GET":
      try {
        // Query parameters
        const { storeId, category } = req.query;
        let query = {};

        // Filter by store if provided
        if (storeId) {
          query.storeId = storeId;
        }

        // Filter by category if provided
        if (category) {
          query.category = category;
        }

        const products = await Product.find(query).populate("storeId", "name");
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // POST - шинэ бүтээгдэхүүн нэмэх
    case "POST":
      try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
