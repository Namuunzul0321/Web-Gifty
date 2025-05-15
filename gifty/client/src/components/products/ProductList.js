import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/ProductList.module.css";

export default function ProductList({ storeId, category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "/api/products";

        // Хүсэлтийн параметрүүд нэмэх
        const params = new URLSearchParams();
        if (storeId) params.append("storeId", storeId);
        if (category) params.append("category", category);

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Бүтээгдэхүүний жагсаалт авахад алдаа гарлаа");
        }

        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Алдаа:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [storeId, category]);

  if (loading) return <div className={styles.loading}>Ачааллаж байна...</div>;
  if (error) return <div className={styles.error}>Алдаа: {error}</div>;

  return (
    <div className={styles.productList}>
      <h2>Бүтээгдэхүүнүүд</h2>
      {products.length === 0 ? (
        <p>Бүтээгдэхүүн олдсонгүй</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <Link href={`/products/${product._id}`} key={product._id}>
              <div className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className={styles.price}>
                  {product.discountPrice ? (
                    <>
                      <span className={styles.originalPrice}>
                        {product.price}₮
                      </span>
                      <span className={styles.discountPrice}>
                        {product.discountPrice}₮
                      </span>
                    </>
                  ) : (
                    <span>{product.price}₮</span>
                  )}
                </p>
                <p className={styles.storeName}>
                  {product.storeId && product.storeId.name
                    ? product.storeId.name
                    : ""}
                </p>
                {!product.isAvailable && (
                  <div className={styles.outOfStock}>Дууссан</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
