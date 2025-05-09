// pages/add-store.js
import { useState } from "react";

export default function AddStore() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        imageUrl,
      }),
    });

    const data = await res.json();
    console.log("Амжилттай нэмэгдлээ:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Дэлгүүр нэмэх</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Нэр"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Тайлбар"
        required
      />
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Зургийн URL"
      />
      <button type="submit">Нэмэх</button>
    </form>
  );
}
