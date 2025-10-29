"use client";

import { useCart } from "../contexts/CartContext";
import styles from "./page.module.css";

export default function CheckoutPage() {
  const { cartItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleCompletePurchase = () => {
    alert("Purchase completed!");
    clearCart(); // ✅ מנקה את כל העגלה
  };

  // חלק מתוך checkout/page.tsx

  return (
    <main className="container">
      {/* כותרת 'Order Summary' או 'Checkout' - לבחירתך */}
      <h1 style={{ textAlign: 'center' }}>Order <span style={{ color: '#f7a620' }}>Summary</span></h1> 
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div className={styles['checkout-items']}>
          {cartItems.map(item => (
            <div key={item.id} className={styles['checkout-item']}>
              <img src={item.image} alt={item.title} />
              <div className={styles['checkout-item-info']}>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                {/* הסרתי את שדה ה-input כדי להתאים למבנה סיכום ההזמנה שבתמונה, שם אין עדכון כמות */}
              </div>
            </div>
          ))}
          
          <div className={styles['total-summary']}>
            <h2>TOTAL: ${totalPrice.toFixed(2)}</h2>
            <button 
              onClick={handleCompletePurchase}
              className={styles['complete-purchase-btn']}
            >
              COMPLETE ORDER
            </button>
          </div>
        </div>
      )}
    </main>
  );
}