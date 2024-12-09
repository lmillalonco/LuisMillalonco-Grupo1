import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const Zona = () => {
    const [isLoading, setIsLoading] = useState(true);

    const zona = [
        {
            name: "Lana",
            description: "La lana desempeña un papel muy importante en la historia de Chiloé y en la vida de sus isleños. No sólo es una excelente forma de protección contra el frío y la lluvia, sino también un reflejo de la cultura local, tan estrechamente ligada a la naturaleza y al estilo de vida comunal.",
            image: "https://media.gettyimages.com/id/683724476/es/foto/local-wool-for-sale-on-the-market-in-dalcahue-chiloe-island-southern-chile.jpg?s=612x612&w=0&k=20&c=v0iJqxQScI2NykZOCdG4f_BIfFugqB7yMwigaOZDMbc=",
        },
        {
            name: "Trabajo",
            description: "Los trabajadores chilotes crean lanchas de alta calidad utilizando técnicas tradicionales y materiales locales, lo que les permite construir embarcaciones que son seguras, duraderas y adaptadas al entorno marino de Chiloé..",
            image: "https://media.gettyimages.com/id/10160142/es/foto/acund-port-chiloe-island-chile.jpg?s=612x612&w=0&k=20&c=okkKKA3jSR8Cp1Kwuva6LtbUDJOslM_C1dRckgjpqvY=",
        },
        {
            name: "Palafitos",
            description: "A mediados del siglo XIX comienzan a aparecer barrios de palafitos en diversos lugares de la Isla Grande de Chiloé,son de una arquitectura construida con maderas nativas del bosque siempre verde de Chiloé, los pilates sobre el agua son de madera densa de luma o ciprés de las Guaitecas, y los revestimientos de las paredes, como las tejuelas, son fabricadas con madera de alerce.",
            image: "https://www.chileparaninos.gob.cl/639/articles-624428_imagen_01.thumb_img_1200x800.jpg",
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer); 
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-white hover:text-blue-700 mb-8">
                La Esencia de Chiloé
                </h1>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {zona.map((zona, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform hover:scale-105"
                        >
                            <img
                                src={zona.image}
                                alt={zona.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold text-gray-900">{zona.name}</h2>
                                <p className="text-gray-700 mt-2">{zona.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Zona;