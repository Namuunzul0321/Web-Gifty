import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/StoreForm.module.css";

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
        headers: {
          "Content-Type": "application/json",
        },
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{store ? "Дэлгүүр засах" : "Шинэ дэлгүүр нэмэх"}</h2>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formGroup}>
        <label htmlFor="name">Дэлгүүрийн нэр*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Тайлбар*</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="location">Байршил*</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="logoUrl">Логоны URL</label>
        <input
          type="url"
          id="logoUrl"
          name="logoUrl"
          value={formData.logoUrl}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contactPhone">Утасны дугаар</label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contactEmail">И-мэйл хаяг</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
        />
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={() => router.back()}
        >
          Буцах
        </button>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? "Ачааллаж байна..." : store ? "Хадгалах" : "Нэмэх"}
        </button>
      </div>
    </form>
  );
}
