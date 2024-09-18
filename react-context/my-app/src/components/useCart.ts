import { useContext } from 'react';
import { CartContext, CartValue } from './CartContext';

export function useCart(): CartValue {
  if (useContext(CartContext) === undefined) {
    throw new Error('only call useCart inside the CartProvider tree');
  }
  return useContext(CartContext);
}
