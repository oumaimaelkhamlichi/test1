// import React from 'react';
// import { Link } from '@inertiajs/inertia-react';
// import { FaSignOutAlt } from 'react-icons/fa';

// function Navbar({ language, handleLanguageChange, translations }) {
//   const {
//     Home = 'Home',
//     Reservations = 'Reservations',
//     Service = 'Service',
//     Rooms = 'Rooms',
//     login = 'Login',
//     signup = 'Sign Up',
//     evenemants='Evenement',

//   } = translations;

//   return (
//     <div className="absolute top-0 w-[90%] text-[#f0ebdbd8] flex justify-between items-center p-5 z-20 mt-10">
//       <img src="images/logoHotel.PNG" alt="Logo" className="w-36 h-24 rounded-full" />

//       <Link href={route('recherche.index2')} className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded"> 
//         {Home}
//       </Link>
//       <Link to="/chambres" className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded">
//         {Reservations}
//       </Link>
//       <Link to="/chambres" className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded">
//         {Rooms}
//       </Link>
//       <Link href={route('services.afficher')} className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded">
//        Service
//       </Link>
//       {/* <Link href={route('/ava')} className="text-[#ffffffdd] no-underline p-2 hover:bg-[rgba(171,150,81,0.2)] rounded">
//       {evenemants}
//       </Link> */}

//       <select onChange={handleLanguageChange} className="bg-[#f0ebdbd8] text-[#000] rounded p-1" value={language}>
//         <option value="en">English</option>
//         <option value="fr">Français</option>
//         <option value="ar">العربية</option>
//         <option value="es">Español</option>
//       </select>

//       <div className="flex gap-2">
//         <Link to="/contact" className="bg-[#d8be81c7] text-white rounded p-2 w-24 text-center">
//           {login}
//         </Link>
//         <Link to="/contact" className="bg-[#d8be81c7] text-white rounded p-2 w-24 text-center">
//           {signup}
//         </Link>
//         <Link
//                 href={route('logout')}
//                 method="post"
//                 as="button"
//                 className="bg-[#d8be81c7] text-white rounded p-2 w-24 text-center"
//               >
//                 <FaSignOutAlt className="mr-2 inline" />
//                 Log Out
//               </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ language, handleLanguageChange, translations }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const {
    Home = 'Home',
    Reservations = 'Reservations',
    Service = 'Service',
    Rooms = 'Rooms',
    login = 'Login',
    signup = 'Sign Up',
  } = translations;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
<nav className={` bg-white shadow-md fixed top-0 w-full z-10 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <img src="image/logoh.png" alt="Logo" className="h-20 w-22" />
            <div className="hidden md:block">
              <div className="ml-9 flex items-baseline space-x-4">
              <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">{Home}</Link>
                <Link href={route('reservation.create1')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">{Reservations}</Link>
                <Link href={route('services.afficher')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">{Service}</Link>
                <Link to="/chambres" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">{Rooms}</Link>
                <select onChange={handleLanguageChange} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium bg-transparent border-none focus:outline-none" value={language}>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                  <option value="es">Español</option>
                </select>
                <Link to="/loginn" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">{login}</Link>
                <Link href={route('register')} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">{signup}</Link>
                <Link href={route('logout')} method="post" as="button" className="bg-[#d8be81c7] text-white rounded p-2 text-sm font-medium">
                  <FaSignOutAlt className="mr-2 inline"/>
                  Log Out
                </Link>
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

      <div className={`min-h-screen  md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* <button onClick={toggleDarkMode}>
           
           {darkMode ? 'Light Mode' : 'Dark Mode'}
         </button> */}
          <Link href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">{Home}</Link>
          <Link href={route('reservation.create1')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">{Reservations}</Link>
          <Link href={route('services.afficher')} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">{Service}</Link>
          <Link to="/chambres" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">{Rooms}</Link>
          <select onChange={handleLanguageChange} className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
            <option value="es">Español</option>
          </select>
          <Link to="/login" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">{login}</Link>
          <Link to="/register" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">{signup}</Link>
          <Link href={route('logout')} method="post" as="button" className="bg-[#d8be81c7] text-white rounded p-2 w-full text-center block text-base font-medium">
            <FaSignOutAlt className="mr-2 inline" />
            Log Out
          </Link>
      
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
