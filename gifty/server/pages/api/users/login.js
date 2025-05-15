import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Имэйл эсвэл нууц үг буруу байна" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Имэйл эсвэл нууц үг буруу байна" });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET || "secret_key", // ⚠️ .env дотор JWT_SECRET гэж нэмээрэй
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Амжилттай нэвтэрлээ",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Серверийн алдаа", error: err.message });
    }
  } else {
    res.status(405).json({ message: "Зөвхөн POST хүсэлт зөвшөөрнө" });
  }
}
