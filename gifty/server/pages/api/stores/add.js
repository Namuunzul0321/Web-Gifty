import dbConnect from "../../../lib/mongoose";
import Store from "../../../models/Store";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    try {
      const store = new Store(req.body);
      await store.save();
      res.status(201).json({ message: "Store saved!", store });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Only POST allowed" });
  }
}
