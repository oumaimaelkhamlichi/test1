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
      {/* <Header/> */}
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
                  <button><Link href={route('reservation.create1')}>reserver</Link></button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="services mb-4">
            <h2 className="servicesHeading">Associated Services:</h2>
            <ul className="list-group">
              {chambreServs.map((serv) => (
                <li key={serv.id} className="list-group-item d-flex align-items-center">
                  <div className="iconContainer mr-3">
                    {serv.vuePlage && <div><FaUmbrellaBeach className="icon icon-custom" /> Vie sur la plage</div>}
                    {serv.wifi && <div><FaWifi className="icon icon-custom" /> Wifi</div>}
                    {serv.nbrlit && <div><FaBed className="icon icon-custom" /> Nombre de lits: {serv.nbrlit}</div>}
                    {serv.ch_Rideaux && <div><FaConciergeBell className="icon icon-custom" /> Rideaux</div>}
                    {serv.ch_climat && <div><FaThermometerHalf className="icon icon-custom" /> Climatisation</div>}
                    {serv.ch_menage && <div><FaBroom className="icon icon-custom" /> Service de ménage</div>}
                    {serv.ch_bureaux && <div><FaBriefcase className="icon icon-custom" /> Bureau</div>}
                    {serv.ch_armoire && <div><FaTrashAlt className="icon icon-custom" /> Armoire</div>}
                    {serv.ch_poubelle && <div><FaTrashAlt className="icon icon-custom" /> Poubelle</div>}
                    {serv.ch_cuisine && <div><FaUtensils className="icon icon-custom" /> Cuisine</div>}
                    {serv.nour_service && <div><FaConciergeBell className="icon icon-custom" /> Service de nourriture</div>}
                    {serv.nour_eauMiniral && <div><FaMugHot className="icon icon-custom" /> Eau minérale</div>}
                    {serv.nour_ftour && <div><FaBreadSlice className="icon icon-custom" /> Service de petit-déjeuner</div>}
                    {serv.nour_rda && <div><FaUtensils className="icon icon-custom" /> Service de restauration à la demande</div>}
                    {serv.nour_acha && <div><FaUtensils className="icon icon-custom" /> Service de restauration achalandé</div>}
                    {serv.bain_peignoire && <div><FaBath className="icon icon-custom" /> Peignoir</div>}
                    {serv.bain_serviete && <div><FaShower className="icon icon-custom" /> Serviettes</div>}
                    {serv.bain_douche && <div><FaShower className="icon icon-custom" /> Douche</div>}
                    {serv.bain_articleToiette && <div><FaSoap className="icon icon-custom" /> Articles de toilette</div>}
                    {serv.bain_salleBainPrivee && <div><FaBath className="icon icon-custom" /> Salle de bain privée</div>}
                    {serv.bain_lavabo && <div><FaSink className="icon icon-custom" /> Lavabo</div>}
                    {serv.telephone && <div><FaPhone className="icon icon-custom" /> Téléphone</div>}
                    {serv.tv && <div><FaTv className="icon icon-custom" /> Télévision</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <Link href="/typechambres" className="btn btn-custom">Back</Link> */}
          <Text />
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