import React from 'react';
import useStore from '../../Store/Store'; 
import { Link } from 'react-router-dom';


const formatPrice = (precio) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(precio);
};

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-[1170px] mt-20 text-center">
      <h2 className="text-2xl font-bold text-orange-600 mb-10">Tu carrito está vacío</h2>
      <Link
        to="/products"
        className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-1 px-4 rounded mt-4 cursor-pointer"
      >
        Volver a la tienda
      </Link>
    </div>
    );
  }

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const total = cart.reduce((acc, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    return acc + itemTotal;
  }, 0);

  const formattedTotal = formatPrice(total);

  return (
    <div className="mx-auto max-w-[1170px] mt-20">
      <h2 className="text-2xl font-bold text-yellow-600 mb-6 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h8m0 0l-.4 2M5.4 5L5.9 3m15.1-.534C16.282 12.95 14.12 14.524 11.5 15.044A4.645 4.645 0 0111.95 15c-1.4 0-2.78-.41-3.3-1.722L5.4 5z" />
      </svg>
          Tu Carrito
    </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">Precio unitario: {formatPrice(item.price)}</p>

                {/* Controles del contador */}
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity || 1}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className={`px-3 py-1 rounded ${
                      item.quantity >= item.stock
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gray-300 hover:bg-yellow-500'
                    }`}
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                </div>

                {item.quantity >= item.stock && (
                  <p className="text-sm text-red-600">No puedes agregar más. Stock máximo alcanzado.</p>
                )}
              </div>
            </div>
            <button
            onClick={() => handleRemove(item.id)}
              className="btn btn-red-800"
                                    >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
          <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
              </svg>
                      Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <h3 className="text-2xl font-semibold text-yellow-600">Total: {formattedTotal}</h3>
        <div className="space-x-4">        
          <button
            onClick={handleClearCart}
            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};
