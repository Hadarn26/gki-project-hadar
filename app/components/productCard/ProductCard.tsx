"use client";

import styles from "./ProductCard.module.css";
import { useCart } from "../../contexts/CartContext";
import { useWishList } from "../../contexts/WishListContext";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, title, price, image, category }: Props) {
  const { addToCart } = useCart();
  const { addToWishList } = useWishList();

  return (
    <div className={styles.card}>
      <Link href={`/product/${id}`} className={styles.linkArea}>
        <img src={image} alt={title} className={styles.image} />
        <h3>{title}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </Link>

      <div className={styles.actions}>
        <button
          onClick={() => addToCart({ id, title, price, image, quantity: 1 })}
          className={styles.addBtn}
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishList({ id, title, price, image })}
          className={styles.wishBtn}
        >
          ♥ WishList
        </button>
      </div>
    </div>
  );
}
