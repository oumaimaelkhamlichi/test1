import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { FaHotel, FaBed, FaCalendarCheck, FaConciergeBell, FaUsers, FaSignOutAlt, FaUserShield } from "react-icons/fa";

export default function Layout() {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
  };

  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen5(false);
  };

  const toggleDropdown5 = () => {
    setIsDropdownOpen5(!isDropdownOpen5);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
  };

  useEffect(() => {
    let timeout;
    if (isDropdownOpen1 || isDropdownOpen2 || isDropdownOpen3 || isDropdownOpen4 || isDropdownOpen5) {
      timeout = setTimeout(() => {
        setIsDropdownOpen1(false);
        setIsDropdownOpen2(false);
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
        setIsDropdownOpen5(false);
      }, 3000); // Close all dropdowns after 3 seconds
    }
    return () => clearTimeout(timeout);
  }, [isDropdownOpen1, isDropdownOpen2, isDropdownOpen3, isDropdownOpen4, isDropdownOpen5]);

  return (
    <div className="flex mt-4">
      <nav className="w-56 py-6 fixed top-0 left-0 bottom-0 z-50 shadow-lg bg-gray-800">
        <div className="max-w-full mx-auto px-4">
          <ul className="flex flex-col items-start space-y-6">
            <li className="mb-6 w-full text-center">
              <Link className="text-white text-xl font-bold">
                <p className="text-green-200">Admin Dashboard</p>
                <FaUserShield size={50} color="white" className="ml-20 " /> {/* Utiliser l'icône avec des propriétés personnalisées */}
              </Link>
            </li>

            <li className="relative w-full">
              <button
                className="text-white flex items-center justify-between w-full py-2 px-4 focus:outline-none hover:bg-gray-700 rounded-md transition"
                onClick={toggleDropdown1}
              >
                <FaBed className="mr-2" />
                Gestion Chambre
                <svg
                  className={`w-5 h-5 transform ${isDropdownOpen1 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`absolute left-full top-0 bg-gray-800 text-white py-2 rounded-md shadow-lg transition duration-300 ${isDropdownOpen1 ? 'block' : 'hidden'}`}>
                <Link href={route('chambres.index')} className="block px-4 py-2 hover:bg-gray-600">Afficher Chambres</Link>
                <Link href={route('chambres.create')} className="block px-4 py-2 hover:bg-gray-600">Ajouter Chambre</Link>
                <Link href={route('typechambres.index')} className="block px-4 py-2 hover:bg-gray-600">les types chambres</Link>

                <Link href={route('typechambres.create')} className="block px-4 py-2 hover:bg-gray-600">Ajouter type chambre</Link>
              </div>
            </li>

            <li className="relative w-full">
              <button
                className="text-white flex items-center justify-between w-full py-2 px-4 focus:outline-none hover:bg-gray-700 rounded-md transition"
                onClick={toggleDropdown2}
              >
                <FaCalendarCheck className="mr-2" />
                Gestion Reservation
                <svg
                  className={`w-5 h-5 transform ${isDropdownOpen2 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`absolute left-full top-0 bg-gray-800 text-white py-2 rounded-md shadow-lg transition duration-300 ${isDropdownOpen2 ? 'block' : 'hidden'}`}>
                <Link href={route('reservation.create')} className="block px-4 py-2 hover:bg-gray-600">Ajouter Reservation</Link>
                <Link href={route('reservation.index')} className="block px-4 py-2 hover:bg-gray-600">Afficher Reservation</Link>
              </div>
            </li>

            <li className="relative w-full">
              <button
                className="text-white flex items-center justify-between w-full py-2 px-4 focus:outline-none hover:bg-gray-700 rounded-md transition"
                onClick={toggleDropdown3}
              >
                <FaConciergeBell className="mr-2" />
                Service Hotel
                <svg
                  className={`w-5 h-5 transform ${isDropdownOpen3 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`absolute left-full top-0 bg-gray-800 text-white py-2 rounded-md shadow-lg transition duration-300 ${isDropdownOpen3 ? 'block' : 'hidden'}`}>
                <Link href={route('services.create')} className="block px-4 py-2 hover:bg-gray-600">Ajouter Service</Link>
                <Link href={route('services.index')} className="block px-4 py-2 hover:bg-gray-600">Afficher Service</Link>
                {/* <Link href={route('services.afficher')} className="block px-4 py-2 hover:bg-gray-600">Afficher Service</Link> */}
              </div>
            </li>

            <li className="relative w-full">
              <button
                className="text-white flex items-center justify-between w-full py-2 px-4 focus:outline-none hover:bg-gray-700 rounded-md transition"
                onClick={toggleDropdown4}
              >
                <FaHotel className="mr-2" />
                Service Chambres
                <svg
                  className={`w-5 h-5 transform ${isDropdownOpen4 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`absolute left-full top-0 bg-gray-800 text-white py-2 rounded-md shadow-lg transition duration-300 ${isDropdownOpen4 ? 'block' : 'hidden'}`}>
                <Link href={route('serchambre.create')} className="block px-4 py-2 hover:bg-gray-600">Ajouter Service</Link>
                <Link href={route('serchambre.index')} className="block px-4 py-2 hover:bg-gray-600">Afficher Service</Link>
              </div>
            </li>

            <li className="relative w-full">
              <button
                className="text-white flex items-center justify-between w-full py-2 px-4 focus:outline-none hover:bg-gray-700 rounded-md transition"
                onClick={toggleDropdown5}
              >
                <FaUsers className="mr-2" />
                Gestion Clients
                <svg
                  className={`w-5 h-5 transform ${isDropdownOpen5 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`absolute left-full top-0 bg-gray-800 text-white py-2 rounded-md shadow-lg transition duration-300 ${isDropdownOpen5 ? 'block' : 'hidden'}`}>
                <Link href={route('users.index')} className="block px-4 py-2 hover:bg-gray-600">Clients</Link>
              </div>
            </li>

            <li className="w-full mt-6 ml-7">
              <Link
                href={route('logout')}
                method="post"
                as="button"
                className="block py-2 px-4 text-white bg-yellow-600 font-bold text-sm text-center rounded-lg hover:bg-yellow-500 transition"
              >
                <FaSignOutAlt className="mr-2 inline" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
