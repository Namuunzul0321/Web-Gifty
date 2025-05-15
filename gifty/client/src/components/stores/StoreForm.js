import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StoreForm({ store }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: store?.name || "",
    description: store?.description || "",
    location: store?.location || "",
    logoUrl: store?.logoUrl || "",
    contactPhone: store?.contactPhone || "",
    contactEmail: store?.contactEmail || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = store ? `/api/stores/${store._id}` : "/api/stores";
      const method = store ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Алдаа гарлаа");
      }

      setLoading(false);
      router.push("/stores");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded space-y-6"
    >
      <h2 className="text-2xl font-bold">
        {store ? "Дэлгүүр засах" : "Шинэ дэлгүүр нэмэх"}
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>
      )}

      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Дэлгүүрийн нэр*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-medium mb-1">
          Тайлбар*
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="location" className="block font-medium mb-1">
          Байршил*
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="logoUrl" className="block font-medium mb-1">
          Логоны URL
        </label>
        <input
          type="url"
          id="logoUrl"
          name="logoUrl"
          value={formData.logoUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="contactPhone" className="block font-medium mb-1">
          Утасны дугаар
        </label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="contactEmail" className="block font-medium mb-1">
          И-мэйл хаяг
        </label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Буцах
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Ачааллаж байна..." : store ? "Хадгалах" : "Нэмэх"}
        </button>
      </div>
    </form>
  );
}
