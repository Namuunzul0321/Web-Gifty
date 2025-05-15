import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;

      // Нууц үг шифрлэх
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: "Алдаа гарлаа", error: err.message });
    }
  } else if (req.method === "GET") {
    const users = await User.find();
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: "Зөвхөн POST болон GET хүсэлт зөвшөөрнө" });
  }
}
