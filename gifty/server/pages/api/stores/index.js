import connectToDatabase from "../../../lib/mongodb";
import Store from "../../../models/Store";

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    // GET - бүх дэлгүүрийг авах
    case "GET":
      try {
        const stores = await Store.find({});
        res.status(200).json({ success: true, data: stores });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // POST - шинэ дэлгүүр нэмэх
    case "POST":
      try {
        const store = await Store.create(req.body);
        res.status(201).json({ success: true, data: store });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
