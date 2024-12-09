import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "scroll" : "hidden";
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative">
      {/* Menú horizontal con logo y barra de búsqueda */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md border-b border-gray-200 shadow-lg z-20 px-4 py-2 items-center">
        <div className="flex items-center ml-2">
          <img
            src="https://mercadochiloe.cl/storage/2020/12/LOGOchiloeatumesapequeno.jpg"
            alt="Logo"
            className="h-8 w-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>

        <ul className="flex space-x-4 items-center justify-center flex-1 ml-9">
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/">Inicio</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/products">Productos</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/contact">Contacto</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/historia">Historia</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-800 hover:text-[#1d4ed8] transition-colors hover:scale-105 duration-300 cursor-pointer px-2 py-1">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        {/* Barra de búsqueda */}
        <div className="relative ml-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-800"
          />
          {/* SVG de lupa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-red-600"
          >
            <path d="M5.94 8.06a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12Z" />
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM4.879 4.879a3 3 0 0 0 3.645 4.706L9.72 10.78a.75.75 0 0 0 1.061-1.06L9.585 8.524A3.001 3.001 0 0 0 4.879 4.88Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Icono del carrito de compras */}
        <div className="ml-4">
          <Link to="/cart" className="ml-4 mt-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1e3a8a"
              className="size-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </Link>
        </div>
      </nav>

      <div className="absolute w-full flex justify-between p-2 items-center md:hidden z-20">
        <img
          src="https://mercadochiloe.cl/storage/2020/12/LOGOchiloeatumesapequeno.jpg"
          alt="Logo"
          className="h-8 w-8 sm:w-10 sm:h-10"
        />
        <button
          onClick={toggleNav}
          className="text-gray-900 hover:text-orange-500 transition-colors duration-500 cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
      {/* Menú lateral para pantallas móviles */}
      <div
        className={`${
          nav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } transition-all duration-300 ease-in-out fixed inset-0 overflow-hidden z-10 bg-black bg-opacity-70`}
      >
      <div className="flex justify-center p-4 border-b border-gray-900 bg-gray-800">
  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Menú</h2>
</div>
        <ul className="flex flex-col w-full items-center justify-center pt-20">
          <li className="font-bold text-2xl p-2 cursor-pointer text-lime-500 hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/">Inicio</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-lime-500 hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/products">Productos</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-lime-500 hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/contact">Contacto</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-lime-500 hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/historia">Historia</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-lime-500 hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
          <Link to="/about">About</Link>
          </li>
          <li className="font-bold text-2xl p-2 cursor-pointer text-lime-500 hover:text-[#facc15] transition-transform duration-300 hover:scale-105">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

