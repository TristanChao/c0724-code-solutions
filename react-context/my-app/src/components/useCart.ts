import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  if (useContext(CartContext) === undefined) {
    throw new Error('only call useCart inside the CartProvider tree');
  }
  return useContext(CartContext);
}
