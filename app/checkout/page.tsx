"use client";

import { useCart } from "../contexts/CartContext";
import styles from "./page.module.css";

export default function CheckoutPage() {
  const { cartItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id: number, delta: number) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    const newQuantity = item.quantity + delta;
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleCompletePurchase = () => {
    alert("Purchase completed successfully!");
    clearCart();
  };

  return (
    <main className="page-content">
      <h1 className={styles.title}>
        Order <span>Summary</span>
      </h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <div className={styles.checkoutContainer}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.itemCard}>
              <img src={item.image} alt={item.title} />
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>

                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, +1)}>+</button>
                </div>

                <p className={styles.itemTotal}>
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className={styles.totalSummary}>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button
              onClick={handleCompletePurchase}
              className={styles.completeBtn}
            >
              Complete Order
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
