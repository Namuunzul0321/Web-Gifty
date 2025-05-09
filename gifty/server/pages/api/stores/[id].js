// pages/api/stores/[id].js
import connectToDatabase from "../../../lib/mongodb";
import Store from "../../../models/Store";

export default async function handler(req, res) {
  const { id } = req.query;
  await connectToDatabase();

  switch (req.method) {
    // GET - нэг дэлгүүрийн мэдээлэл авах
    case "GET":
      try {
        const store = await Store.findById(id);

        if (!store) {
          return res
            .status(404)
            .json({ success: false, message: "Дэлгүүр олдсонгүй" });
        }

        res.status(200).json({ success: true, data: store });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // PUT - дэлгүүрийн мэдээлэл шинэчлэх
    case "PUT":
      try {
        const store = await Store.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!store) {
          return res
            .status(404)
            .json({ success: false, message: "Дэлгүүр олдсонгүй" });
        }

        res.status(200).json({ success: true, data: store });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // DELETE - дэлгүүр устгах
    case "DELETE":
      try {
        const deletedStore = await Store.findByIdAndDelete(id);

        if (!deletedStore) {
          return res
            .status(404)
            .json({ success: false, message: "Дэлгүүр олдсонгүй" });
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
