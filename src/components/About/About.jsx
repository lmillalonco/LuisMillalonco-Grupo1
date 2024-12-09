import React, { useState } from 'react';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleExplorarChiloe = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className="h-screen w-full bg-[#1e1b4b]"
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
          <h1 className="text-3xl text-blue-600 font-bold mb-4">Acerca de Chiloé</h1>
          <p className="text-md mb-4">
            Chiloé es un archipiélago ubicado en el sur de Chile, conocido por su rica cultura, historia y
            naturaleza. La isla principal, también llamada Chiloé, es la segunda isla más grande de Chile y es
            hogar de una variedad de comunidades y paisajes únicos.
          </p>
          <p className="text-md mb-4">
            En este sitio web, te invitamos a explorar la belleza y la riqueza de Chiloé. Desde sus paisajes
            naturales hasta su cultura y tradiciones, te mostraremos lo mejor de esta hermosa isla.
          </p>
          <h2 className="text-2xl text-blue-600 font-bold mb-4">Nuestra misión</h2>
          <p className="text-md mb-4">
            Nuestra misión es promover la cultura, la historia y la naturaleza de Chiloé, y brindar a nuestros
            visitantes una experiencia única y enriquecedora.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleExplorarChiloe}
            >
              Explorar Chiloé
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            <h2 className="text-2xl font-bold mb-4">Explorar Chiloé</h2>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/glze-x0t_CI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;