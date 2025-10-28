// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/header/Header";
import { CartProvider } from "./contexts/CartContext";
import { WishListProvider } from "./contexts/WishListContext";

export const metadata = {
  title: "Milk & Honey Store",
  description: "Fake eCommerce Store",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishListProvider>
            <Header />
            {children}
          </WishListProvider>
        </CartProvider>
      </body>
    </html>
  );
}
