import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nnavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ml-60">
            <img src="image/logoh.png" alt="Logo" className="h-8 w-auto" />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href={route('homee')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href={route('reservation.create1')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Reservations</Link>
                <Link href={route('services.afficher')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Service</Link>
                <Link href={route('recherche.index2')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Room</Link>
                <select className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium bg-transparent border-none focus:outline-none">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                  <option value="es">Español</option>
                </select>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href={route('homee')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href={route('reservation.create1')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Reservations</Link>
          <Link href={route('services.afficher')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Service</Link>
          <Link href={route('recherche.index2')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Room</Link>
          <select className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
            <option value="es">Español</option>
          </select>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nnavbar;
