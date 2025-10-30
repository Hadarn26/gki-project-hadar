"use client";

import { useState } from "react";
import Link from "next/link";
import CartDropdown from "../cartDropdown/CartDropdown";
import { useWishList } from "../../contexts/WishListContext";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react"; 
export default function Header() {
  const { wishList } = useWishList();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToWishList = () => {
    router.push("/wishlist");
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/images/Screenshot 2025-10-28 114135.png"
          alt="Logo"
          className={styles.logoImg}
        />
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/category/mens" onClick={() => setMenuOpen(false)}>Mens</Link>
        <Link href="/category/womens" onClick={() => setMenuOpen(false)}>Womens</Link>
        <Link href="/category/jewelery" onClick={() => setMenuOpen(false)}>Jewelery</Link>
        <Link href="/category/electronics" onClick={() => setMenuOpen(false)}>Electronics</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>

      <div className={styles.actions}>
        <button className={styles.wishlistButton} onClick={goToWishList}>
          ♥
          {wishList.length > 0 && (
            <span className={styles.badge}>{wishList.length}</span>
          )}
        </button>

        <CartDropdown />
      </div>
    </header>
  );
}
