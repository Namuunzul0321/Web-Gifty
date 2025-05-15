import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/StoreList.module.css";

export default function StoreList() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("/api/stores");

        if (!response.ok) {
          throw new Error("Дэлгүүрүүдийн мэдээлэл авахад алдаа гарлаа");
        }

        const data = await response.json();
        setStores(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Алдаа:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) return <div className={styles.loading}>Ачааллаж байна...</div>;
  if (error) return <div className={styles.error}>Алдаа: {error}</div>;

  return (
    <div className={styles.storeList}>
      <h2>Бүх дэлгүүрүүд</h2>
      {stores.length === 0 ? (
        <p>Одоогоор бүртгэлтэй дэлгүүр байхгүй байна.</p>
      ) : (
        <div className={styles.grid}>
          {stores.map((store) => (
            <Link href={`/stores/${store._id}`} key={store._id}>
              <div className={styles.storeCard}>
                {store.logoUrl && (
                  <div className={styles.logoContainer}>
                    <img src={store.logoUrl} alt={store.name} />
                  </div>
                )}
                <h3>{store.name}</h3>
                <p className={styles.location}>{store.location}</p>
                <p className={styles.description}>{store.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
