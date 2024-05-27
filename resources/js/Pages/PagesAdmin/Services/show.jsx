import React, { useState, useEffect } from 'react';
import './show.css';
import Navbar from '@/Layouts/Navbar'; // Import Navbar
// import Footer from '@/Pages/PageClient/Footer';
import Footer from '@/Pages/PageClient/Footer';
export default function Show(props) {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState('en'); 

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
  titre='Services de Concierge, Restauration, Bien-être',
  descrip= 'Notre concierge est à votre disposition pour organiser vos déplacements, réservations de restaurants, et répondre à toutes vos demandes spécialesNous nous engageons à offrir un service de qualité pour que votre séjour soit mémorable et agréable. Nhésitez pas à nous contacter pour toute demande ou information supplémentaire. Nous sommes impatients de vous accueillir. Explorez tout, de nos occasions spéciales à nos espaces de réunion polyvalents et plus encore avec The Rees',
bienvenu='Bienvenue à Notre Hôtel',
text='Nous sommes ravis de vous accueillir à Cazy suite, où le confort, le luxe et le service exceptionnel se rencontrent pour créer une expérience inoubliable.',
}= translations;

 

  return (
    <div className="container">
      <Navbar 
        language={language}
        handleLanguageChange={handleLanguageChange}
        translations={translations}
      />
      <div className="image-container">
        <img className="im1" src="/images/rec.jpg" alt="Service Image" />
        <div className="overlay">
          <div className="text">
            <h2>{bienvenu}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className="cards-container">
        {props.services.map(service => (
          <div key={service.id} className="card">
            <img src={service.image} alt={service.nom} className="service-image" />
            <div className="card-content">
              <h2 className="card-title">{service.nom}</h2>
              <h1 className="card-description">{service.description}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4'><Footer/> </div>
      {/* <div className='divv'>
        <p className='pp'>
          <h1>{titre}</h1>
       {descrip}
        </p>
      </div> */}
      <div>
        <img src="/images/serv1.jpg" alt="" />
        <img src="/images/serv2.jpg" alt="" />
        <img src="/images/serv4.jpg" alt="" />
        <img src="/images/serv5.jpg" alt="" />
      </div>
    </div>
  );
}
