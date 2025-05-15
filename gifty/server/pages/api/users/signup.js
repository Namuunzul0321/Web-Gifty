import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: "Алдаа гарлаа", error: err });
    }
  } else if (req.method === "GET") {
    const users = await User.find();
    res.status(200).json(users);
  }
}
