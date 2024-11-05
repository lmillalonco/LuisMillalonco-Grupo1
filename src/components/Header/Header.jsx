import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "scroll" : "hidden";
  };

  return (
    <div className="relative">
      {/* Menú horizontal con logo */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md border-b border-gray-200 shadow-lg z-20 px-2 py-0">
        <div className="flex items-center ml-2">
          <img
            src="https://mercadochiloe.cl/storage/2020/12/LOGOchiloeatumesapequeno.jpg"
            alt="Logo"
            className="h-8 w-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>

        <ul className="flex space-x-4 items-center justify-center flex-1">
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/">Inicio</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/products">Productos</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 uration-300 cursor-pointer px-2 py-1">
            <Link to="/contact">Contacto</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="historia">Historia</Link>
          </li>
        </ul>
      </nav>

      <div className="absolute w-full flex justify-between p-2 items-center md:hidden z-20">
        {/* Logo para pantallas pequeñas */}
        <img
          src="https://mercadochiloe.cl/storage/2020/12/LOGOchiloeatumesapequeno.jpg"
          alt="Logo"
          className="h-8 w-8 sm:w-10 sm:h-10"
        />
        <button
          onClick={toggleNav}
          className="text-gray-800 hover:text-orange-500 transition-colors duration-500 cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Menú lateral para pantallas pequeñas u mobile*/}
      <div
        className={`${
          nav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } transition-all duration-300 ease-in-out fixed inset-0 overflow-hidden z-10 bg-black bg-opacity-70`}
      >
        <ul className="flex flex-col w-full items-center justify-center pt-20">
          <li className="font-bold text-2xl p-2 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/">Inicio</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/products">Productos</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/contact">Contacto</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-white hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
             <Link to="historia">Historia</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
