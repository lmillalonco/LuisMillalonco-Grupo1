const Contenido = () => {
    return (
      <div className='relative w-full h-screen overflow-hidden'>
        {/* Pantalla Completa */}
        <img
          className='absolute top-0 left-0 w-full h-full object-cover'
          src='https://s1.1zoom.me/b6363/657/Chile_Houses_Stones_Boats_Evening_Chiloe_Island_545893_2560x1440.jpg'
          alt='img'
        />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
          <div className='max-w-[1100px] w-full px-4'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 drop-shadow-2xl hover:text-[#fdba74] duration-300 cursor-pointer text-center'>
              Donde la Naturaleza Canta y el Alma Descansa
            </h1>
            <p className='max-w-[600px] mx-auto drop-shadow-2xl py-2 text-sm sm:text-base md:text-lg mt-8 text-center'>
              Chiloé, un lugar donde la naturaleza se mezcla con la magia en cada rincón, es un destino que invita a dejar atrás la rutina y conectar con lo esencial. Sus paisajes verdes y su mística inigualable te harán sentir la serenidad de la vida sencilla, mientras el viento marino susurra historias antiguas. Atrévete a explorar la Gran Isla de Chiloé, donde cada paso es una oportunidad para reencontrarte contigo mismo y con la belleza natural en su estado más puro.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Contenido;
