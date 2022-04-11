import { useState } from 'react';

// Importando iconos de Heroicons
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  // State para manejar el estado de la barra de navegación
  const [nav, setNav] = useState(false);

  // Función para cambiar el estado de la barra de navegación
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        {/* Título y menú de navegación */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
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
        <div className="md:hidden" onClick={handleClick}>
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
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
            <li className="border-b-2 border-zinc-300 w-full">About</li>
            <li className="border-b-2 border-zinc-300 w-full">Support</li>
            <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
            <li className="border-b-2 border-zinc-300 w-full">Pricing</li>

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
