"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProductById } from "../../utils/api";
import { useCart } from "../../contexts/CartContext";
import { useWishList } from "../../contexts/WishListContext";
import styles from "./page.module.css";

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();
  const { addToWishList } = useWishList();
  const router = useRouter();

  useEffect(() => {
    if (id) fetchProductById(Number(id)).then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <main className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        ← Back
      </button>
      <div className={styles.product}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.details}>
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() =>
            addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 })
          }>
            Add to Cart
          </button>
          <button onClick={() =>
            addToWishList({ id: product.id, title: product.title, price: product.price, image: product.image })
          }>
            ♥ WishList
          </button>
        </div>
      </div>
    </main>
  );
}
