// import { Link } from "@inertiajs/react"
// import React, { useState } from "react"
// import Home from "./Home";
// import Contact from "./Contact";
// import Login from "../Auth/Login";
// import Register from "../Auth/Register";

// import Dashboard from "../Dashboard";
// export default function Navabar(){
//     const [afficherPageMembre, setAfficherPageMembre] = useState(0);
//     const toggleAffichage = (page) => {
//         setAfficherPageMembre(page);
//       };
//     return(
//         <div>
//             {/* <Dashboard/> */}



//             <nav class="bg-gray border-gray-200 dark:bg-gray-900">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
//       <img src="./resources/css/images/LOGO.jpeg" class="h-8" alt="Logo" />
//       {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
  
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       {/* <button onClick={() => toggleAffichage(5)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Se conecter</button>
//       <button onClick={() => toggleAffichage(6)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">s'inscrire</button> */}

//       <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
//     <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a   class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">
            
//         <button  onClick={() => toggleAffichage(0)}>Accueill</button>
//         </a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//         <button  onClick={() => toggleAffichage(1)}>Contact</button>
//         </a>
//       </li>
//       <li>
//         <a class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//         <button  onClick={() => toggleAffichage(1)}>Contact</button>
//         </a>
//       </li>
      
//     </ul>
//   </div>
//   </div>
// </nav>
// {
//      afficherPageMembre ==0 && <Home/>
//       }
//       {
//      afficherPageMembre ==1 && <Contact/> 
//       }
//        {
//      afficherPageMembre ==5 && <Login/> 
//       }
//         {
//      afficherPageMembre ==6 && <Register/> 
//       }
     

//         </div>
//     )
// }


// import { Link, usePage } from '@inertiajs/inertia-react';
// import React from 'react';
// import { Link } from '@inertiajs/inertia-react';
// import Dropdown from '@/Components/Dropdown';
// import { usePage } from '@inertiajs/react';

// export default function Navbar() {
//   const { auth } = usePage();

//   return (
//     <nav>
//       <div>
//         <Link href="/">Accueil</Link>
//         <Link href="/about">À propos</Link>
//         <Link href="/contact">Contact</Link>
//         {auth.user ? (
//           <Dropdown>
//             <Dropdown.Trigger>
//               <span className="inline-flex rounded-md">
//                 <button
//                   type="button"
//                   className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
//                 >
//                   {auth.user.name}
//                   <svg
//                     className="ml-2 -mr-0.5 h-4 w-4"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </span>
//             </Dropdown.Trigger>

//             <Dropdown.Content>
//               <Dropdown.Link href="/profile/edit">Profil</Dropdown.Link>
//               <Dropdown.Link href="/logout" method="post" as="button">
//                 Déconnexion
//               </Dropdown.Link>
//             </Dropdown.Content>
//           </Dropdown>
//         ) : (
//           <div>
//             <Link href="/">Accueil</Link>
//             <Link href="/about">À propos</Link>
//             <Link href="/contact">Contact</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }




import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import Home from "./Home";
import Contact from "./Contact";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Dashboard";

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
    <div>
      <nav className="bg-gray border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src="./resources/css/images/LOGO.jpeg" className="h-8" alt="Logo" />

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuDeroulantOuvert ? 'block' : 'hidden'}`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                  onClick={() => toggleAffichage(0)}
                >
                   Accueil
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              {userAuthentifie ? (
                <>
                  <li>
                    <a
                      className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover```jsx
                         :bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      onClick={() => toggleAffichage(1)}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      onClick={seDeconnecter}
                    >
                      Se déconnecter
                    </a>
                  </li>
                </>
              ) : (
                <>
                   <li>
                    <a
                      className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      onClick={() => toggleAffichage(5)}
                    >
                      Connexion
                    </a>
                  </li>
                  <li> 
                    <a
                      className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      onClick={() => toggleAffichage(6)}
                    >
                      Inscription
                    </a>
                  </li>
                  
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {afficherPageMembre === 0 && <Home />}
      {afficherPageMembre === 1 && <Contact />}
      {afficherPageMembre === 5 && <Login/>}
      {afficherPageMembre === 6 && <Register/>}
    </div>
  );
}
