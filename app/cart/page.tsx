"use client";
import { useCart } from "../contexts/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <main className={styles.container}>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.details}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, Number(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button className={styles.checkout}>Checkout</button>
        </>
      )}
    </main>
  );
}
