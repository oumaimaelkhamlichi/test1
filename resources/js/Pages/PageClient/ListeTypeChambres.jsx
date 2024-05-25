import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import Navbar from '@/Layouts/Navbar';
import './Styleclient.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/Layouts/footer';

export default function AfficherChambres({ typechambres }) {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState('en');
  const [filteredTypeChambres, setFilteredTypeChambres] = useState([]);
  const [filters, setFilters] = useState({
    typeChambre: '',
    dateDebut: '',
    dateFin: '',
    nbrPersonne: '',
  });
  const [backgroundImages, setBackgroundImages] = useState([
    '/image/91a703a8d1332039ea9eda1a2f370b77.jpg',
  ]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const filtered = typechambres.filter((typechambre) => {
      const { dateDebut, dateFin, nbrPersonne, typeChambre } = filters;
      const matchDateDebut = !dateDebut || new Date(typechambre.date_dispo_debut) <= new Date(dateDebut);
      const matchDateFin = !dateFin || new Date(typechambre.date_dispo_fin) >= new Date(dateFin);
      const matchNbrPersonne = !nbrPersonne || typechambre.nbr_personne >= parseInt(nbrPersonne);
      const matchTypeChambre = !typeChambre || typechambre.typeChambre === typeChambre;
      return matchDateDebut && matchDateFin && matchNbrPersonne && matchTypeChambre;
    });
    setFilteredTypeChambres(filtered);
  }, [filters, typechambres]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSliderChange = () => {
    setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await fetch(`/translations?lang=${language}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTranslations(data.translations);
      } catch (error) {
        console.error('Error fetching translations:', error);
      }
    };

    fetchTranslations();
  }, [language]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const {
    welcome = 'Welcome to Cozy Suites',
    perfect_getaway = 'Your perfect getaway destination',
    bookNow = 'Book Now',
    roomType = 'Room Types',
    startDate = 'Start Date',
    endDate = 'End Date',
    personCount = 'Number of People',
    roomList = 'List of Rooms',
    price = 'Price',
    description = 'Description',
    seeDetails = 'View Details',
    all = 'All',
    standard = 'Standard',
    double = 'Double',
    twin = 'Twin',
    luxe = 'Luxe',
    family = 'Family',
    executive = 'Executive',
    withView = 'With a View',
  } = translations;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    
      <div className=" container">
      <Navbar 
      className='w-40 '
        language={language}
        handleLanguageChange={handleLanguageChange}
        translations={translations}
      />

      <div className="header-content">
        <h1>{welcome}</h1>
        <p>{perfect_getaway}</p>
        <Button component={Link} to="/book-now" variant="contained" className='btn'>{bookNow}</Button>
      </div>

      <div className="background-slider" onClick={handleSliderChange}>
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider Image ${index}`}
            className={`slider-image ${index === currentBackgroundIndex ? 'active' : 'inactive'}`}
          />
        ))}
      </div>

      <form className='recherche'>
        <label>
          {roomType}:
          <select
            name="typeChambre"
            value={filters.typeChambre}
            onChange={handleFilterChange}
          >
            <option value="">{all}</option>
            <option value="Chambre standard">{standard}</option>
            <option value="Chambre double">{double}</option>
            <option value="Chambre twin">{twin}</option>
            <option value="Chambre de luxe">{luxe}</option>
            <option value="Chambre familiale">{family}</option>
            <option value="Chambre exécutive">{executive}</option>
            <option value="Chambre avec vue">{withView}</option>
          </select>
        </label>
        <label>
          {startDate}:
          <input
            type="date"
            name="dateDebut"
            value={filters.dateDebut}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          {endDate}:
          <input
            type="date"
            name="dateFin"
            value={filters.dateFin}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          {personCount}:
          <input
            type="number"
            name="nbrPersonne"
            value={filters.nbrPersonne}
            onChange={handleFilterChange}
          />
        </label>
      </form>

      <div className="card">
        <h1 className="title">{roomList}</h1>
        <div className="grid">
          {filteredTypeChambres.map((typechambre) => (
            <div key={typechambre.id} className="chambre">
              <Slider {...sliderSettings}>
                {['image1', 'image2', 'image3', 'image4'].map((imgKey) => (
                  typechambre[imgKey] && (
                    <div key={imgKey}>
                      <img src={`/image/${typechambre[imgKey]}`} alt={`image ${imgKey}`} />
                    </div>
                  )
                ))}
              </Slider>
              <h2 className="chambreTitle">
                {typechambre[`translated_type_chambre_${language}`]}
              </h2>
              <p className="chambrePrice">
                <strong>{price}:</strong> {typechambre.prix_par_nuit} €
              </p>
              <p className="chambreDescription">
                <strong>{description}:</strong> {typechambre[`translated_description_${language}`]}
              </p>
              <a href={`/typechambre/${typechambre.id}`} className="button">
                {seeDetails}
              </a>
            </div>
          ))}
        </div>
       
      </div>
      
      {/* <div className='footer'>
      <Footer/>
      </div> */}
    </div>
    
    
    
    
  );
}
