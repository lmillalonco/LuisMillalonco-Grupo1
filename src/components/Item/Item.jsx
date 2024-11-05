import React from 'react';

// Función para formatear el precio
const formatPrice = (precio) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP', // Para que sea la moneda chilena
  }).format(precio);
};

export default function Item({ name, precio, img, category, stock }) {
  const formattedPrice = formatPrice(precio); // Formatear el precio

  return (
    <div className="bg-gray-500 p-4 shadow-lg rounded-lg hover:scale-105 transition-transform">
      <img src={img} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-lg font-bold hover:text-blue-300 my-2">{name}</h3>
      <p className="text-white">{formattedPrice}</p> {/* Aca usa el precio formateado */}
      <p className="text-sm text-gray-400">Categoría: {category}</p>
      <p className={`text-sm ${stock > 0 ? 'text-white' : 'text-red-500'}`}>
        {stock > 0 ? `En stock: ${stock}` : 'Agotado'}
      </p>
    </div>
  );
};

