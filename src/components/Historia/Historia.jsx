const Historia = () => {
    return (
        <div className="h-auto bg-gradient-to-r from-indigo-900 via-yellow-800 to-black min-h-screen pt-32 pb-16 mx-auto px-6 lg:px-12 lg:pt-16 mt-5">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-1">
                    <h3 className="text-3xl text-white hover:text-blue-500 duration-300 cursor-pointer text-center lg:text-left">
                        Provincia
                    </h3>
                    <p className="mt-10 text-gray-300 text-xs lg:text-sm text-center lg:text-left leading-relaxed">
                    La Provincia de Chiloé comprende la totalidad del archipiélago del mismo nombre, está formada por más de 40 islas menores y la Isla grande, la cual posee una superficie de 9.181,5kms², siendo la isla más grande de Sudamérica después de Tierra del Fuego.

                    Los Poblados chilotes conservan el encanto, tradición y costumbres de sus habitantes, lo que constituye la principal riqueza de estas tierras.

                    Esta área se caracteriza por su gran actividad marítima, propia de un archipiélago y por su cultura culinaria, rica en carnes y mariscos.               

                    Generosa es la isla por su artesanía, que se despliega en colores y texturas: mimbre, lana, madera y otras artes manuales, con una fuerte presencia religiosa que se descubre a través de sus 150 iglesias y de sus múltiples festividades

                    Los palafitos, construcciones sobre pilares en el agua son la arquitectura típica de Chiloé.

                    Está integrada por las comunas de Castro, Ancud, Quemchi, Dalcahue, Curaco de Vélez, Quinchao, Puqueldón, Chonchi, Queilén y Quellón.
                    </p>
                </div>

                {/* Galería de imágenes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
                    <img 
                        className="object-cover w-full h-64 rounded-lg duration-300 hover:scale-105 cursor-pointer hover:shadow-2xl"
                        src="https://www.monumentos.gob.cl/sites/default/files/styles/large-16_9/public/isla_aucar.jpg?itok" 
                        alt="Isla aucar "
                    />
                    <img 
                        className="object-cover w-full h-64 rounded-lg duration-300 hover:scale-105 cursor-pointer hover:shadow-2xl"
                        src="https://blogskystorage.s3.amazonaws.com/2022/12/skyairline_skyairline_image_128.jpeg" 
                        alt="palafito"
                    />
                    <img
                        className="object-cover w-full h-64 rounded-lg duration-300 hover:scale-105 cursor-pointer hover:shadow-2xl"
                        src="https://static.wixstatic.com/media/7d37ec_d5df092393ef4486bdcfbab96eaea7ef.jpg/v1/fill/w_849,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7d37ec_d5df092393ef4486bdcfbab96eaea7ef.jpg" 
                        alt="iglesia quimchao"
                    />
                    <img
                        className="object-cover w-full h-64 rounded-lg duration-300 hover:scale-105 cursor-pointer hover:shadow-2xl"
                        src="https://storage.googleapis.com/chile-travel-cdn/2021/07/chiloe_prin-min.jpg" 
                        alt="Punta Pirulil"
                    />
                </div>
            </div>
        </div>
    );
};

export default Historia;
