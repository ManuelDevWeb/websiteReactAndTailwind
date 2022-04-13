import { useState } from 'react';

// Importando iconos de Heroicons
import { MenuIcon, XIcon } from '@heroicons/react/outline';
// Importando React Scroll
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  // State para manejar el estado de la barra de navegación
  const [nav, setNav] = useState(false);

  // Función para cambiar el estado de la barra de navegación
  const handleClick = () => setNav(!nav);
  // Función para cerrar la barra de navegación mobile
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        {/* Título y menú de navegación */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <Link to="home" smooth={true} duration={500}>
              <li>Home</li>
            </Link>
            <Link to="about" smooth={true} offset={-200} duration={500}>
              <li>About</li>
            </Link>
            <Link to="support" smooth={true} offset={-50} duration={500}>
              <li>Support</li>
            </Link>
            <Link to="platforms" smooth={true} offset={-100} duration={500}>
              <li>Platforms</li>
            </Link>
            <Link to="pricing" smooth={true} offset={-50} duration={500}>
              <li>Pricing</li>
            </Link>
          </ul>
        </div>

        {/* Buttons de navegación */}
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-4 lg:px-8 py-3">Sign Up</button>
        </div>

        {/* Icono de menú */}
        <div className="md:hidden mr-4" onClick={handleClick}>
          {
            // Si el nav es false, se muestra el icono de menú, sino, se muestra el icono de cerrar
            !nav ? (
              <MenuIcon className="h-6 w-6" />
            ) : (
              <XIcon className="h-6 w-6" />
            )
          }
        </div>
      </div>

      {
        // Si el nav es true, se muestra el menú de navegación
        nav && (
          // Menú de navegación mobile
          <ul className="absolute bg-zinc-200 w-full px-8">
            <Link onClick={handleClose} to="home" smooth={true} duration={500}>
              <li className="border-b-2 border-zinc-300 w-full">Home</li>
            </Link>
            <Link
              onClick={handleClose}
              to="about"
              smooth={true}
              offset={-200}
              duration={500}
            >
              <li className="border-b-2 border-zinc-300 w-full">About</li>
            </Link>
            <Link
              onClick={handleClose}
              to="support"
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="border-b-2 border-zinc-300 w-full">Support</li>
            </Link>
            <Link
              onClick={handleClose}
              to="platforms"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
            </Link>
            <Link
              onClick={handleClose}
              to="pricing"
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
            </Link>

            {/* Buttons de navegación mobile */}
            <div className="flex flex-col my-4">
              <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                Sign In
              </button>
              <button className="px-8 py-3">Sign Up</button>
            </div>
          </ul>
        )
      }
    </div>
  );
};

export default Navbar;
