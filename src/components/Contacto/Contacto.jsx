import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => !field)) {
      setError('Por favor, completa todos los campos.');
    } else {
      setSubmitted(true);
      setError('');
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-16 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl hover:text-orange-400 hover:scale-105 font-bold mb-4">Contáctanos</h1>

      {submitted ? (
        <p className="text-green-500">¡Gracias por tu mensaje!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}

          {[
            { name: 'nombre', label: 'Nombre' },
            { name: 'email', label: 'Email' },
            { name: 'mensaje', label: 'Mensaje' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 font-semibold">{field.label}:</label>
              <input
                type={field.name === 'email' ? 'email' : field.name === 'mensaje' ? 'textarea' : 'text'}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Ingresa tu ${field.label.toLowerCase()}`}
              />
            </div>
          ))}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-orange-500 transition">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};
