"use client";
// /src/contexts/WishListContext.tsx
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

export interface WishListItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface WishListContextType {
  wishList: WishListItem[];
  addToWishList: (item: WishListItem) => void;
  removeFromWishList: (id: number) => void;
}

const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const WishListProvider = ({ children }: { children: ReactNode }) => {
  const [wishList, setWishList] = useState<WishListItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishList(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const addToWishList = (item: WishListItem) => {
    if (!wishList.find(w => w.id === item.id)) {
      setWishList(prev => [...prev, item]);
    }
  };

  const removeFromWishList = (id: number) => {
    setWishList(prev => prev.filter(w => w.id !== id));
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (!context) throw new Error("useWishList must be used within a WishListProvider");
  return context;
};
