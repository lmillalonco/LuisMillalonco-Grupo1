import { useState, useEffect } from "react";

const Naturaleza = () => {
  const slides = [
    { url: "https://storage.googleapis.com/chile-travel-static-content/2019/09/iglesia-Castro-cielo.jpg", title: "iglesia" },
    { url: "https://storage.googleapis.com/chile-travel-static-content/2019/09/Iglesia-Castro.jpg", title: "iglesia-2" },
    { url: "https://www.gochile.cl/fotos/full/105731-518803217@2x.jpg", title: "iglesia-3" },
    { url: "https://as1.ftcdn.net/v2/jpg/05/76/70/12/1000_F_576701250_tdSv9jqZQRdknHYNwqAmSt0GgUl2MgTm.jpg", title: "pasarela" },
    { url: "https://images.pexels.com/photos/7903537/pexels-photo-7903537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "costanera" },
    { url: "https://static.wixstatic.com/media/7d37ec_2bbd03b3580149638a120a3dadb5ed12.jpg/v1/fill/w_992,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7d37ec_2bbd03b3580149638a120a3dadb5ed12.jpg", title: "birds" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-blue-950 py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white hover:text-yellow-400">
          Descubre la Naturaleza de Chiloé
        </h2>
        <p className="text-white mt-2">
          Explora la belleza y cultura de esta región única a través de su arquitectura, paisajes y tradiciones.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center w-[90%] max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-4">
          <div
            className="relative overflow-hidden rounded-xl bg-center bg-cover shadow-md transition-all duration-700"
            style={{
              height: "300px",
              backgroundImage: `url('${slides[currentIndex].url}')`,
            }}
          ></div>
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 mx-1 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"} cursor-pointer`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-red-900">
            ¿Por qué visitar Chiloé?
          </h3>
          <p className="text-gray-600 mt-2">
            Chiloé es conocido por sus iglesias patrimoniales, sus palafitos
            coloridos y su entorno natural que combina bosques, costas y cielos
            despejados. ¡Un lugar lleno de magia y tradición!
          </p>
          <ul className="list-disc  ml-5 mt-4 text-green-950">
            <li>Arquitectura única e iglesias de madera.</li>
            <li>Paisajes naturales impresionantes.</li>
            <li>Cultura local rica y tradiciones vivas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Naturaleza;
