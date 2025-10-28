"use client";
// Header.tsx
import Link from "next/link";
import { useCart } from "../../contexts/CartContext";
import styles from "./Header.module.css";

export default function Header() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">LOGO</Link>
      </div>
      <nav className={styles.center}>
        <Link href="/">Home</Link>
        <Link href="/category/men">Mens</Link>
        <Link href="/category/women">Womens</Link>
        <Link href="/category/jewelery">Jewelery</Link>
        <Link href="/category/electronics">Electronics</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <div className={styles.right}>
        <Link href="/cart">Cart ({cartCount})</Link>
      </div>
    </header>
  );
}
