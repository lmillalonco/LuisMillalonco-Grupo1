import React from "react";

const Informacion = () => {
    const data = [
        {
            id: 1,
            image: "https://www.gochile.cl/fotos/full/43225-bandurria-daniel-perez@2x.jpg",
            title: "Bandurria",
            description: "De 74 cms. de largo, es un ave de llamativos colores parecida a la garza, con un pico largo y encorvado. Su cabeza y cuello son de color ocre; su frente, corona y nuca son de color café castaño.",
            habitat: "Hábitat: Humedales y zonas costeras",
        },
        {
            id: 2,
            image: "https://photos.smugmug.com/Aves-por-especies/Charadriiformes/Queltehue/i-Tf5w5bP/1/Mh7F3rTdJD3fNnw8P7bhJDQTffj7ZjZn4P6mm2Njf/XL/IMG_0086%20Queltehue%202%20RV%23%20-XL.jpg",
            title: "Queltehue",
            description: "Ave que habita en las orillas de lagos, lagunas y tranques, en campos arados, praderas humedas y secas, y en extensiones de pasto en ciudades. Mide 35-37 cm de largo, pesa 300-320 gramos y tiene la cabeza y el cuello grises, mientras que la frente, la garganta y el pecho son negros.",
            habitat: "Orillas de lagos, lagunas y tranques",
        },
        {
            id: 3,
            image: "https://seo.org/wp-content/uploads/2013/11/F246_Foto_01.jpg",
            title: "Zarapito Real",
            description: "(Numenius arquata): Es una de las especies migratorias más comunes durante los veranos chilotes. Suele encontrarse solo en la playa, mientras que prefiere grupos de cientos en los pantanos. Viaja desde Alaska y Canadá hasta Tierra del Fuego.",
            habitat: "estuarios, marismas, praderas, humedales, ríos, zonas fangosas y costas",
        },
        {
            id: 4,
            image: "https://extincionanimal.org/wp-content/uploads/2020/05/zorro-chilote-2.jpg",
            title: "Zorro chilote",
            description: "El zorro chilote o zorro de Darwin (Lycalopex fulvipes) es un cánido endémico del sur de Chile. Fue descrito por primera vez en 1834 por Charles Darwin, quien lo clasificó erróneamente como una subespecie del zorro chilla, Se considera la especie de cánido en mayor riesgo de extinción en el mundo.",
            habitat: " monte abierto, bosque abierto, estepa, pastizal y arbustal.",
        },
        {
            id: 5,
            image: "https://1000genomas.cl/wp-content/uploads/2024/01/Pudu.jpg",
            title: "Pudú ",
            description: "El pudú es el más pequeño de los ciervos de América. Su tamaño es de 40 cms. de altura y su peso es de aproximadamente 10 kgs. Su color varía de café rojizo a grisáceo amarillento, siendo el primero el más común. De las dos especies de pudúes que existen, sólo una de ellas habita en Chile. Este animal se caracteriza por ser muy tímido y medroso.",
            habitat: " monte abierto, bosque abierto, estepa, pastizal y arbustal.",
        },
        {
            id: 6,
            image: "https://media.gettyimages.com/id/642348604/es/foto/southern-river-otter-chiloe-island-chile.jpg?s=612x612&w=0&k=20&c=JuCfj-X85pH0X2oPbdcf3pXTzHYdCOMZ3O3gZk-oyyY=",
            title: "Huillín (Lontra provocax)",
            description: "u hábitat lo comprenden las aguas y riberas de ríos, lagos y esteros con abundante vegetación y restos leñosos. Sin embargo, desde Chiloé, debido a la existencia de amplios sistemas estuariales que incluyen fiordos y canales, la presencia de huillín se extiende al ámbito marino.",
            habitat: " El huillín habita en arroyos, ríos, estuarios, lagos y esteros con abundante vegetación",
        },
        
    ];

    return (
        <div className="bg-yellow-600 py-12">
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-2xl font-bold text-center mb-8 hover:text-lime-400 text-gray-800 cursor-pointer">
                    Descubre las Aves de la Región
                </h2>
                <div className="flex flex-wrap gap-8 justify-center">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="relative group w-full max-w-xs"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                            />
                            {/* Contenedor de información */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                                <h3 className="text-lime-400 text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 text-center text-xs mb-2">
                                    {item.description}
                                </p>
                                <p className="text-lime-400 font-semibold text-center">
                                    {item.habitat}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Informacion;
