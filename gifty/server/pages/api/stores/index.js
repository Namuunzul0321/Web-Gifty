import dbConnect from "../../../lib/mongodb";
import Store from "../../../models/Store";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const store = await Store.create(req.body);
      res.status(201).json(store);
    } catch (err) {
      res.status(400).json({ message: "Алдаа", error: err });
    }
  } else if (req.method === "GET") {
    const stores = await Store.find();
    res.status(200).json(stores);
  }
}
