
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import Home from "./Home";
import Contact from "./Contact";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Dashboard";
import AjouterChambre from "../PagesAdmin/Chambres/create";
import AjouterReserv from "../PagesAdmin/Reservation/create";

import AfficherChambres from "../PagesAdmin/Chambres";
export default function Navbar() {
  const [afficherPageMembre, setAfficherPageMembre] = useState(0);
  const [userAuthentifie, setUserAuthentifie] = useState(false);
  const [menuDeroulantOuvert, setMenuDeroulantOuvert] = useState(false);

  const toggleAffichage = (page) => {
    setAfficherPageMembre(page);
  };

  const toggleMenuDeroulant = () => {
    setMenuDeroulantOuvert(!menuDeroulantOuvert);
  };

  const seDeconnecter = () => {
    // Logique de déconnexion de l'utilisateur
    setUserAuthentifie(false);
  };

  return (
   
  <div> <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
  <div class="flex flex-col justify-between h-full">
    <div class="flex-grow">
      <div class="px-4 py-6 text-center border-b">
        <h1 class="text-xl font-bold leading-none"><span class="text-yellow-700">Task Manager</span> App</h1>
      </div>
      <div class="p-4">
        <ul class="space-y-1">
            
        
        <li className="flex items-center bg-gray-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2
     2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  </svg>
 
  <Link
    href={route('chambres.index')}
    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    aria-current="page"
    onClick={() => toggleAffichage(4)}
  >
    les chambresss
  </Link>
</li>

<li className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2
     2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  </svg>
 
  <Link
    href={route('chambres.create')}
    // className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    aria-current="page"
    onClick={() => toggleAffichage(2)}
  >
    Ajouter une chambreee
  </Link>
</li>
<li className="flex items-center bg-gray-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2
     2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  </svg>
 
  <Link
    href={route('reservation.create')}
    // className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    aria-current="page"
    onClick={() => toggleAffichage(3)}
  >
    Ajouter une reservation
  </Link>
</li>
<li className="flex items-center bg-gray-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2
     2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  </svg>
 
  <Link
    href={route('chambres.index')}
    // className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    aria-current="page"
    onClick={() => toggleAffichage(4)}
  >
    les chambres
  </Link>
</li>
          <li>
            <a href="javascript:void(0)" class="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2
                 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
              </svg>Plan
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
              </svg>Task list
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
              </svg>Projects
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>Tags
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-4">
      <button type="button" class="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="" viewBox="0 0 16 16">
          <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </button> <span class="font-bold text-sm ml-2">Logout</span>
    </div>
  </div>
  
     
</aside>
  {/* Contenu dynamique */}
  {afficherPageMembre === 0 && <Home />}
      {afficherPageMembre === 1 && <Contact />}
      {afficherPageMembre === 2 && <AjouterChambre />}
      {afficherPageMembre === 3 && <AjouterReserv />}
      {afficherPageMembre === 4 && <AfficherChambres/>}
    {afficherPageMembre === 5 && <Login />}
    {afficherPageMembre === 6 && <Register />}
     {userAuthentifie && afficherPageMembre === 7 && <Dashboard />}</div>
    // <div className="flex">
    //   {/* Sidebar */}
    //   <aside className="bg-white-200 w-48  mt-20 ml-0">
    //     <ul className="flex flex-col p-4 space-y-2 bg-gray">
    //       <li>
    //         <Link
    //           className="text-gray-700 hover:text-blue-700"
    //           onClick={() => toggleAffichage(0)}
    //         >
    //           Accueil
    //         </Link>
    //       </li>
    //       <li>
    //       <Link
    //   href={route('chambres.create')}
    //   className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //   aria-current="page"
    //   onClick={() => toggleAffichage(2)}
    // >
    //   Ajouter une chambre
    // </Link>
    //       </li>
    //       <li>
    //       <Link
    //   href={route('reservation.create')}
    //   className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //   aria-current="page"
    //   onClick={() => toggleAffichage(3)}
    // >
    //   Ajouter une reservation
    // </Link>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="text-gray-700 hover:text-blue-700"
    //         >
    //           À propos
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="text-gray-700 hover:text-blue-700"
    //         >
    //           Services
    //         </a>
    //       </li>
    //       {userAuthentifie ? (
    //         <>
    //           <li>
    //             <a
    //               className="text-gray-700 hover:text-blue-700"
    //               onClick={() => toggleAffichage(1)}
    //             >
    //               Contact
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               className="text-gray-700 hover:text-blue-700"
    //               onClick={seDeconnecter}
    //             >
    //               Se déconnecter
    //             </a>
    //           </li>
    //         </>
    //       ) : (
    //         <>
    //           <li>
    //             <a
    //               className="text-gray-700 hover:text-blue-700"
    //               onClick={() => toggleAffichage(5)}
    //             >
    //               Connexion
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               className="text-gray-700 hover:text-blue-700"
    //               onClick={() => toggleAffichage(6)}
    //             >
    //               Inscription
    //             </a>
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </aside>

    //   {/* Container */}
    //   <div className="flex-grow p-4">
    //     <nav className="bg-gray border-gray-200 dark:bg-gray-900">
    //       <div className="max-w-screen-xl flex items-center justify-between mx-auto">
    //         <img
    //           src="./resources/css/images/LOGO.jpeg"
    //           className="h-8"
    //           alt="Logo"
    //         />

    //         <button
    //           type="button"
    //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           aria-controls="navbar-cta"
    //           aria-expanded="false"
    //           onClick={toggleMenuDeroulant}
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className="w-5 h-5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 17 14"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M1 1h15M1 7h15M1 13h15"
    //             />
    //           </svg>
    //         </button>

    //         <div
    //           className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
    //             menuDeroulantOuvert ? "block" : "hidden"
    //           }`}
    //           id="navbar-cta"
    //         >
    //           <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
    //             <li>
    //               <Link
    //                 className="text-gray-700 hover:text-blue-700"
    //                 onClick={() => toggleAffichage(0)}
    //               >
    //                 Accueil
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className="text-gray-700 hover:text-blue-700"
    //                 onClick={() => toggleAffichage(2)}
    //               >
    //                 Ajouter une chambre
    //               </Link>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-700 hover:text-blue-700"
    //               >
    //                 À propos
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-700 hover:text-blue-700"
    //               >
    //                 Services
    //               </a>
    //             </li>
    //             {userAuthentifie ? (
    //               <>
    //                 <li>
    //                   <a
    //                     className="text-gray-700 hover:text-blue-700"
    //                     onClick={() => toggleAffichage(1)}
    //                   >
    //                     Contact
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     className="text-gray-700 hover:text-blue-700"
    //                     onClick={seDeconnecter}
    //                   >
    //                     Se déconnecter
    //                   </a>
    //                 </li>
    //               </>
    //             ) : (
    //               <>
    //                 <li>
    //                   <a
    //                     className="text-gray-700 hover:text-blue-700"
    //                     onClick={() => toggleAffichage(5)}
    //                   >
    //                     Connexion
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     className="text-gray-700 hover:text-blue-700"
    //                     onClick={() => toggleAffichage(6)}
    //                   >
    //                     Inscription
    //                   </a>
    //                 </li>
    //               </>
    //             )}
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>

    //     {/* Contenu dynamique */}
    //     {afficherPageMembre === 0 && <Home />}
    //     {afficherPageMembre === 1 && <Contact />}
    //     {afficherPageMembre === 2 && <AjouterChambre />}
    //     {afficherPageMembre === 3 && <AjouterReserv />}
    //     {afficherPageMembre === 5 && <Login />}
    //     {afficherPageMembre === 6 && <Register />}
    //     {userAuthentifie && afficherPageMembre === 7 && <Dashboard />}
    //   </div>
    // </div>
  );
}