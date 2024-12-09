import { create } from 'zustand';

const useStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity < product.stock) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            ),
          };
        } else {
          alert('No hay más stock disponible de este producto.');
          return state; 
        }
      } else {
        return {
          cart: [
            ...state.cart,
            { ...product, quantity: Math.min(product.quantity || 1, product.stock) },
          ],
        };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
    
  clearCart: () =>
    set(() => ({
      cart: [],
    })),

  increment: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decrement: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

export default useStore;