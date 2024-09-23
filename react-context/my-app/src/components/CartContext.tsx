import { createContext, ReactNode, useState } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext<CartValue>(defaultCartValue);

type ProviderProps = {
  children: ReactNode;
};
export function CartProvider({ children }: ProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(item: Product): void {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
