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
      <Link href={`/product/${id}`}>
        <img src={image} alt={title} className={styles.image} />
      </Link>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, title, price, image, quantity: 1 })}>Add to Cart</button>
      <button onClick={() => addToWishList({ id, title, price, image })}>♥ WishList</button>
    </div>
  );
}
