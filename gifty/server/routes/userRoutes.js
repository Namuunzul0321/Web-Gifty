const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Өгөгдөл:", req.body);

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "Амжилттай бүртгэгдлээ" });
  } catch (err) {
    console.error("Хадгалах үед алдаа:", err);
    res.status(500).json({ message: "Алдаа гарлаа" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Цахим хаяг бүртгэлгүй байна." });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Нууц үг буруу байна." });
    }

    // Амжилттай нэвтэрсэн
    res.status(200).json({ message: "Амжилттай нэвтэрлээ", user });
  } catch (error) {
    console.error("Нэвтрэх алдаа:", error);
    res.status(500).json({ message: "Серверийн алдаа" });
  }
});

module.exports = router;
