import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className='relative'>
      {/* Menú horizontal*/}
      <nav className='hidden md:flex justify-center fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md border-b border-gray-200 shadow-lg z-20'>
        <ul className='flex space-x-8 py-4'>
          <li className='text-gray-800 hover:text-[#1d4ed8] transition-colors duration-300 cursor-pointer'>
            Inicio
          </li>
          <li className='text-gray-800 hover:text-[#1d4ed8] transition-colors duration-300 cursor-pointer'>
            Nosotros
          </li>
          <li className='text-gray-800 hover:text-[#1d4ed8] transition-colors duration-300 cursor-pointer'>
            Naturaleza
          </li>
          <li className='text-gray-800 hover:text-[#1d4ed8] transition-colors duration-300 cursor-pointer'>
            Isla
          </li>
          <li className='text-gray-800 hover:text-[#1d4ed8] transition-colors duration-300 cursor-pointer'>
            Galería
          </li>
        </ul>
      </nav>

      {/* Contenido del header */}
      <div className='absolute w-full flex justify-between p-4 items-center z-20'>
        <img
          src="https://static.wixstatic.com/media/7d37ec_5bbb1df86e3346edb51123b996530fbb~mv2.png/v1/fill/w_110,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo-chico-web.png"
          alt="Logo"
          className="h-10 w-8 mr-2 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
        {/* Icono de menú */}
        <button
          onClick={toggleNav}
          className='md:hidden text-[#fafafa] hover:text-orange-500 duration-500 cursor-pointer hover:scale-125 focus:outline-none'
          aria-label="Toggle menu"
        >
          {/* Icono de heroicons bars-3 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Menú lateral para pantallas pequeñas */}
      <div
        className={`${
          nav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } transition-all duration-300 ease-in-out fixed inset-0 overflow-hidden z-10 bg-black bg-opacity-70`}
      >
        <ul className='flex flex-col w-full items-center justify-center pt-20'>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105'>
            Inicio
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105'>
            Nosotros
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105'>
            Naturaleza
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105'>
            Isla
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105'>
            Galería
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
