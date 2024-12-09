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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
        {/* Información de contacto */}
        <div className="w-full md:w-1/3 text-gray-800 mb-6 md:mb-0 md:mr-auto">
          <h2 className="text-2xl text-yellow-500 hover:text-red-800 font-bold mb-3">Información de Contacto</h2>
          <p className="mb-2 font-bold">Teléfono: +56 9 53650005</p>
          <p className="mb-2 font-bold">Email: siempreverdeturismo@gmail.com</p>
          <p className="mb-2 font-bold">Direccion: Blanco 50, Castro, Región de Los Lagos, Chile.</p>
        </div>

        {/* Formulario de contacto */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl text-gray-800 hover:text-red-800 mb-4">Contáctanos</h1>

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
      </div>
    </div>
  );
};
