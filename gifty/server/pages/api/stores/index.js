import dbConnect from "../../../lib/mongodb";
import Store from "../../../models/Store";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const store = await Store.create(req.body);
      res.status(201).json(store);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else if (req.method === "GET") {
    try {
      const stores = await Store.find();
      res.status(200).json(stores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
