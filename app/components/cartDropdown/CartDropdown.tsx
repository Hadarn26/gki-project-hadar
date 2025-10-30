
"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CartDropdown.module.css"; 

export default function CartDropdown() {
  const { cartItems, totalPrice } = useCart(); 
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={styles['cart-dropdown-container']}> 
      <button onClick={() => setIsOpen(!isOpen)}>
        🛒 Cart ({cartItems.length})
      </button>

      {isOpen && (
        <div className={styles['cart-dropdown']}> 
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {cartItems.map(item => (
                  <li key={item.id} className={styles['cart-item']}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles['cart-item-image']}
                    />
                    <div className={styles['cart-item-info']}>
                      <p>{item.title}</p>
                      <p>
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles['cart-total-footer']}>
                  <span>Total:</span>
                  <span className={styles['total-amount']}>
                    ${totalPrice.toFixed(2)}
                  </span>
              </div>
              <Link href="/checkout">
                <button className={styles['checkout-btn']}>CHECKOUT</button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}