import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FaSignOutAlt } from 'react-icons/fa';

function Navbar({ language, handleLanguageChange, translations }) {
  const {
    Home = 'Home',
    Reservations = 'Reservations',
    Service = 'Service',
    Rooms = 'Rooms',
    login = 'Login',
    signup = 'Sign Up',

  } = translations;

  return (
    <div className="absolute top-0 w-[90%] text-[#f0ebdbd8] flex justify-between items-center p-5 z-20 mt-10">
      <img src="image/logohh.png" alt="Logo" className="w-36 h-24 rounded-full" />

      <Link href={route('recherche.index2')} className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded"> 
        {Home}
      </Link>
      <Link to="/chambres" className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded">
        {Reservations}
      </Link>
      <Link to="/chambres" className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded">
        {Rooms}
      </Link>
      <Link href={route('services.afficher')} className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded">
        Afficher Service
      </Link>

      <select onChange={handleLanguageChange} className="bg-[#f0ebdbd8] text-[#000] rounded p-1" value={language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
        <option value="es">Español</option>
      </select>

      <div className="flex gap-2">
        <Link to="/contact" className="bg-[#d8be81c7] text-white rounded p-2 w-24 text-center">
          {login}
        </Link>
        <Link to="/contact" className="bg-[#d8be81c7] text-white rounded p-2 w-24 text-center">
          {signup}
        </Link>
        <Link
                href={route('logout')}
                method="post"
                as="button"
                className="bg-[#d8be81c7] text-white rounded p-2 w-24 text-center"
              >
                <FaSignOutAlt className="mr-2 inline" />
                Log Out
              </Link>
      </div>
    </div>
  );
}

export default Navbar;
