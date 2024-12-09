import React from 'react';
import useStore from "../../Store/Store"; 

// Función para formatear el precio
const formatPrice = (precio) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP', // Moneda chilena
  }).format(precio);
};

export default function Item({ id, name, precio, img, category, stock }) {
  const formattedPrice = formatPrice(precio); // Formatear el precio
  const addToCart = useStore((state) => state.addToCart); // para que se pueda Obtener la función addToCart desde mi store

  const handleAddToCart = () => {
    addToCart({ 
      id, 
      name, 
      price,
      img, 
      category, 
      stock, 
      quantity: 1, 
    });
  };

  return (
    <div className="bg-yellow-700 p-4 shadow-lg rounded-lg hover:scale-105 transition-transform">
      <img 
        src={img} 
        alt={name} 
        className="w-full h-48 object-cover rounded-lg" 
      />
      {/* Información del producto */}
      <h3 className="text-lg font-bold text-gray-400 hover:text-blue-300 my-2">{name}</h3>
      <p className="text-white">{formattedPrice}</p>
      <p className="text-sm text-gray-400">Categoría: {category}</p>
      <p className={`text-sm ${stock > 0 ? 'text-white' : 'text-red-500'}`}>
        {stock > 0 ? `En stock: ${stock}` : 'Agotado'}
      </p>
    </div>
  );
};
