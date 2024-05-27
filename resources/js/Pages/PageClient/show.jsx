import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaUmbrellaBeach, FaWifi, FaBed, FaConciergeBell, FaThermometerHalf,
  FaBroom, FaBriefcase, FaTrashAlt, FaUtensils, FaMugHot, FaBreadSlice,
  FaBath, FaShower, FaSoap, FaSink, FaPhone, FaTv
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowTypeChambre.css';

import Jadore from './LikeComment';
import Text from './TextComment';
import Rating from './RatingComment';
import AjouterReserv from '../PagesAdmin/Reservation/create';
// import route from 'vendor/tightenco/ziggy/src/js';
// import Header from '@/Layouts/header';

export default function ShowTypeChambre({ typechambre, chambreServs, comment, typeChambres }) {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const initialData = comment || { texte: '', jadore: false, rating: 0 };
  const [rating, setRating] = useState(initialData.rating);
  const { data, setData, post, processing, errors } = useForm({
    texte: initialData.texte,
    jadore: initialData.jadore,
    rating: initialData.rating,
  });

  const handleJadoreClick = () => {
    setData('jadore', !data.jadore);
  };

  const handleStarClick = (currentRating) => {
    setRating(currentRating);
    setData('rating', currentRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className="container mt-4">
        <div className="relative">
      <img 
        src="/./images/create1.jpg" 
        alt="Description de l'image" 
        className="w-full h-80 border-2 border-gray-300 rounded-lg shadow-lg object-cover mb-5" 
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-white text-lg font-bold">
          Réserver votre chambre tous simplement  en Cuzy suite ! .
         
          <Link href="/" className="ml-20 w-20 bg-yellow-600 text-white hover:text-nuuton-dark px-3 py-2 rounded-md text-sm font-medium">
          <button>
        Home
        </button>
      </Link>
        
         
        </h1>
      </div>
    </div>
      {!showReservationForm && (
        <>
          <div className="row mb-4">
            <div className="col-lg-5 mb-4">
              <div className="card">

                <div className="card-body p-0">
                  <Slider {...settings}>
                    {typechambre.image1 && (
                      <div>
                        <img
                          src={route('tchambre.image', { image: typechambre.image1 })}
                          alt="image1"
                          className="img-fluid"
                        />
                      </div>
                    )}
                    {typechambre.image2 && (
                      <div>
                        <img
                          src={route('tchambre.image', { image: typechambre.image2 })}
                          alt="image2"
                          className="img-fluid"
                        />
                      </div>
                    )}
                    {typechambre.image3 && (
                      <div>
                        <img
                          src={route('tchambre.image', { image: typechambre.image3 })}
                          alt="image3"
                          className="img-fluid"
                        />
                      </div>
                    )}
                    {typechambre.image4 && (
                      <div>
                        <img
                          src={route('tchambre.image', { image: typechambre.image4 })}
                          alt="image4"
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{typechambre.typeChambre}</h1>

                  <Jadore value={data.jadore} onClick={handleJadoreClick} />
                  <p className="card-text">Description: {typechambre.description}</p>
                  <p className="card-text">Price per Night: {typechambre.prix_par_nuit} €</p>
                  <Rating value={rating} onClick={handleStarClick} errors={errors.rating} />
                  {/* <button
                  
                    className="btn btn-custom"
                    
                  ><a href="create1"> Reserve</a>
                   
                  </button> */}
                 <button className=" mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <Link href={route('reservation.create1')}>Réserver</Link>
                   </button>

                  
                </div>
              </div>
            </div>
          </div>
          <div className="services mb-4">
            <h2 className="servicesHeading">Associated Services:</h2>
            <ul className="list-group">
              {chambreServs.map((serv) => (
               <li key={serv.id} className="list-group-item d-flex align-items-center">
               <div className="flex space-x-4">
                 {/* <div className="iconContainer mr-3"> */}
                   <div>
                     {serv.vuePlage && <div className="flex items-center"><FaUmbrellaBeach className="icon icon-custom mr-2" /> Vie sur la plage</div>}
                     {serv.wifi && <div className="flex items-center"><FaWifi className="icon icon-custom mr-2" /> Wifi</div>}
                     {serv.nbrlit && <div className="flex items-center"><FaBed className="icon icon-custom mr-2" /> Nombre de lits: {serv.nbrlit}</div>}
                     {serv.ch_Rideaux && <div className="flex items-center"><FaConciergeBell className="icon icon-custom mr-2" /> Rideaux</div>}
                     {serv.ch_climat && <div className="flex items-center"><FaThermometerHalf className="icon icon-custom mr-2" /> Climatisation</div>}
                     {serv.ch_menage && <div className="flex items-center"><FaBroom className="icon icon-custom mr-2" /> Service de ménage</div>}
                   </div>
                 {/* </div> */}
                 <div>
                   {serv.ch_bureaux && <div className="flex items-center"><FaBriefcase className="icon icon-custom mr-2" /> Bureau</div>}
                   {serv.ch_armoire && <div className="flex items-center"><FaTrashAlt className="icon icon-custom mr-2" /> Armoire</div>}
                   {serv.ch_poubelle && <div className="flex items-center"><FaTrashAlt className="icon icon-custom mr-2" /> Poubelle</div>}
                   {serv.ch_cuisine && <div className="flex items-center"><FaUtensils className="icon icon-custom mr-2" /> Cuisine</div>}
                   {serv.nour_service && <div className="flex items-center"><FaConciergeBell className="icon icon-custom mr-2" /> Service de nourriture</div>}
                   {serv.nour_eauMiniral && <div className="flex items-center"><FaMugHot className="icon icon-custom mr-2" /> Eau minérale</div>}
                 </div>
                 <div>
                   {serv.nour_ftour && <div className="flex items-center"><FaBreadSlice className="icon icon-custom mr-2" /> Service de petit-déjeuner</div>}
                   {serv.nour_rda && <div className="flex items-center"><FaUtensils className="icon icon-custom mr-2" /> Service de restauration à la demande</div>}
                   {serv.nour_acha && <div className="flex items-center"><FaUtensils className="icon icon-custom mr-2" /> Service de restauration achalandé</div>}
                   {serv.bain_peignoire && <div className="flex items-center"><FaBath className="icon icon-custom mr-2" /> Peignoir</div>}
                   {serv.bain_serviete && <div className="flex items-center"><FaShower className="icon icon-custom mr-2" /> Serviettes</div>}
                   {serv.bain_douche && <div className="flex items-center"><FaShower className="icon icon-custom mr-2" /> Douche</div>}
                 </div>
                 <div>
                   {serv.bain_articleToiette && <div className="flex items-center"><FaSoap className="icon icon-custom mr-2" /> Articles de toilette</div>}
                   {serv.bain_salleBainPrivee && <div className="flex items-center"><FaBath className="icon icon-custom mr-2" /> Salle de bain privée</div>}
                   {serv.bain_lavabo && <div className="flex items-center"><FaSink className="icon icon-custom mr-2" /> Lavabo</div>}
                   {serv.telephone && <div className="flex items-center"><FaPhone className="icon icon-custom mr-2" /> Téléphone</div>}
                   {serv.tv && <div className="flex items-center"><FaTv className="icon icon-custom mr-2" /> Télévision</div>}
                 </div>
                 <div style={{ width:'700px',height:'',padding:'10px' }}>
                 <Text />
                 </div>
                
               </div>
             </li>
             
              ))}
            </ul>
          </div>
          {/* <Link href="/typechambres" className="btn btn-custom">Back</Link> */}
          {/* <Text /> */}
        </>
      )}
      {showReservationForm && (
        <div className="reservation-form-overlay">
          <AjouterReserv typeChambres={typeChambres} />
          <button
            className="btn btn-custom mt-3"
            onClick={() => setShowReservationForm(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}