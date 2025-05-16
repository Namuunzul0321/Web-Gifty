"use client";
import { useEffect, useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [storeId, setStoreId] = useState("");
  const [stores, setStores] = useState([]);
  const [message, setMessage] = useState(null);

  // Дэлгүүрүүдийг татах
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch("/api/stores");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setStores(data);
      } catch (error) {
        console.error("📛 Дэлгүүр татаж чадсангүй:", error);
        setMessage({ type: "error", text: "Дэлгүүрүүдийг татаж чадсангүй." });
      }
    };

    fetchStores();
  }, []);

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price: Number(price), // Үнэ тоон утга болгож хөрвүүлнэ
          store: storeId, // Энд store гэж өөрчилсөн
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: "success",
          text: "✅ Бүтээгдэхүүн амжилттай нэмэгдлээ!",
        });
        setName("");
        setPrice("");
        setStoreId("");
      } else {
        setMessage({
          type: "error",
          text: `❌ Алдаа: ${data.error || "Нэмж чадсангүй."}`,
        });
      }
    } catch (err) {
      console.error("💥 Сервертэй холбогдоход алдаа:", err);
      setMessage({ type: "error", text: "💥 Сервер холболт алдаа гарлаа." });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          🛍 Бүтээгдэхүүн нэмэх
        </h2>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm font-medium ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <input
          type="text"
          placeholder="Бүтээгдэхүүний нэр"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />

        <input
          type="number"
          placeholder="Үнэ (₮)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />

        <select
          value={storeId}
          onChange={(e) => setStoreId(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        >
          <option value="">-- Дэлгүүр сонгох --</option>
          {stores.map((store) => (
            <option key={store._id} value={store._id}>
              {store.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full transition-colors"
        >
          ➕ Нэмэх
        </button>
      </form>
    </div>
  );
}
