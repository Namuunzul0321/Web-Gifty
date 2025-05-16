"use client";
import { useState } from "react";

export default function AddStore() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/stores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, image, description }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Амжилттай нэмэгдлээ");
        setName("");
        setImage("");
        setDescription("");
      } else {
        alert("Алдаа: " + data.error);
      }
    } catch (error) {
      console.error("Алдаа:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-pink-200 h-[500px] p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Дэлгүүр нэмэх
        </h2>

        <input
          type="text"
          placeholder="Дэлгүүрийн нэр"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4  py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />

        <input
          type="text"
          placeholder="Зургийн URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />

        <textarea
          placeholder="Тайлбар"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-4 py-2  rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          rows={4}
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full hover:bg-purple-700 transition-colors"
        >
          ➕ Нэмэх
        </button>
      </form>
    </div>
  );
}
