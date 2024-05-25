import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const TopNavbar = () => {
  return (
    <nav className="bg-gray-100 p-2 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full ml-80 mx-auto px-4">
        <div className="flex justify-between items-center"> {/* Ajout de la classe flex et items-center */}
          <div className="flex items-center"> {/* Nouvelle div pour envelopper le logo et les liens */}
        <h1>le nom set</h1>  
             <img src="images/fn.png" alt="" className='w-24 h-24 '/> 


            <div className="flex space-x-4 ml-60"> {/* Div pour les liens */}
              <Link href={route('chambres.index')} className="text-black relative group">
                Commentaire
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-400  font-bold"></span>
              </Link>
              
              {/* <Link href={route('chambres.create')} className="text-black relative group">
                Client
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </Link>
              <Link href={route('reservation.create')} className="text-black  relative group">
                statistique
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </Link>
              <Link href={route('MyPages.Contact')} className="text-black relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
