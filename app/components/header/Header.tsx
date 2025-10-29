"use client";

import Link from "next/link";
import CartDropdown from "../cartDropdown/CartDropdown";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="images/Screenshot 2025-10-28 114135.png" alt="Logo" className={styles.logo} />
            </div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/category/mens">Mens</Link>
                <Link href="/category/womens">Womens</Link>
                <Link href="/category/jewelery">Jewelery</Link>
                <Link href="/category/electronics">Electronics</Link>
                <Link href="/contact">Contact Us</Link>
            </nav>
            <CartDropdown />
        </header>
    );
}
