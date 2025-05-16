const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
      isAdmin: isAdmin || false,
    });

    await newUser.save();
    res.status(201).json({ message: "Хэрэглэгч амжилттай бүртгэгдлээ" });
  } catch (err) {
    res.status(500).json({ error: "Бүртгэлд алдаа гарлаа", details: err });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ message: "Имэйл эсвэл нууц үг буруу байна" });
    }

    res.status(200).json({
      message: "Амжилттай нэвтэрлээ",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Нэвтрэхэд алдаа гарлаа", details: err });
  }
});

module.exports = router;
