// import React, { useState, useEffect } from 'react';
// import { Link } from '@inertiajs/inertia-react';
// import './Styleclient.css';
// import { Button } from '@mui/material';
// import Footer from '@/Layouts/Footer';

// export default function AfficherChambres({ chambres }) {
//   const [filteredChambres, setFilteredChambres] = useState(chambres);
//   const [filters, setFilters] = useState({
//     typeChambre: '',
//     dateDebut: '',
//     dateFin: '',
//     nbrPersonne: '',
//   });
 
//   const [backgroundImages, setBackgroundImages] = useState([
//     '/image/91a703a8d1332039ea9eda1a2f370b77.jpg',
//   ]);
//   const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

//   useEffect(() => {
//     const filtered = chambres.filter((chambre) => {
//       const { dateDebut, dateFin, nbrPersonne, typeChambre } = filters;
//       const matchDateDebut = !dateDebut || new Date(chambre.date_dispo_debut) >= new Date(dateDebut);
//       const matchDateFin = !dateFin || new Date(chambre.date_dispo_fin) <= new Date(dateFin);
//       const matchNbrPersonne = !nbrPersonne || chambre.nbr_personne >= parseInt(nbrPersonne);
//       const matchTypeChambre = !typeChambre || chambre.typeChambre === typeChambre;
//       return matchDateDebut && matchDateFin && matchNbrPersonne && matchTypeChambre;
//     });
//     setFilteredChambres(filtered);
//   }, [filters, chambres]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, [backgroundImages]);

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   const handleSliderChange = () => {
//     setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//   };

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value;
//     console.log("Selected Language: ", selectedLanguage);
//   };

//   return (
//     <div className="container">
//       <div className="navbar">
//         <img src="image/logoh.png" alt="" />
//         <Link to="/">Home</Link>
//         <Link to="/chambres">Reservations</Link>
//         <Link to="/chambres">Servere</Link>
//         <Link to="/chambres">Chambres</Link>
//         <select onChange={handleLanguageChange} className="language-select">
//           <option value="en">English</option>
//           <option value="fr">Français</option>
//           <option value="ar">العربية</option>
//           <option value="es">Español</option>
//         </select>
//         <button><Link to="/contact">Contact</Link></button>
//       </div>
      
//       <div className="header-content">
//         <h1>Welcome to Cozy Suites</h1>
//         <p>Your perfect getaway destination</p>
//         <Button component={Link} to="/book-now" variant="contained" className='btn'>Book Now</Button>
//       </div>

//       <div className="background-slider" onClick={handleSliderChange}>
//         {backgroundImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slider Image ${index}`}
//             className={`slider-image ${index === currentBackgroundIndex ? 'active' : 'inactive'}`}
//           />
//         ))}
//       </div>

//       <form className='recherche'>
//         <label>
//           Type de Chambre:
//           <select
//             name="typeChambre"
//             value={filters.typeChambre}
//             onChange={handleFilterChange}
//           >
//             <option value="">Tous</option>
//             <option value="standard">Standard</option>
//             <option value="double">Double</option>
//             <option value="twin">Twin</option>
//             <option value="luxe">Luxe</option>
//             <option value="familaile">Familiale</option>
//             <option value="executive">Executive</option>
//             <option value="avecVue">Avec Vue</option>
//           </select>
//         </label>
//         <label>
//           Date de début:
//           <input
//             type="date"
//             name="dateDebut"
//             value={filters.dateDebut}
//             onChange={handleFilterChange}
//           />
//         </label>
//         <label>
//           Date de fin:
//           <input
//             type="date"
//             name="dateFin"
//             value={filters.dateFin}
//             onChange={handleFilterChange}
//           />
//         </label>
//         <label>
//           Nombre de personnes:
//           <input
//             type="number"
//             name="nbrPersonne"
//             value={filters.nbrPersonne}
//             onChange={handleFilterChange}
//           />
//         </label>
//       </form>

//       <div className="card">
//         <h1 className="title">Liste des chambres</h1>
//         <div className="grid">
//           {filteredChambres.map((chambre) => (
//             <div key={chambre.id} className="chambre">
//               <td>
//                 {chambre.image1 && (
//                   <img src={route('chambre.image', { image: chambre.image1 })} alt="image" />
//                 )}
//               </td>
//               <h2 className="chambreTitle">{chambre.nom_chambre}</h2>
//               <p className="chambrePrice">
//                 <strong>Prix:</strong> {chambre.prix_chambre} €
//               </p>
//               <p className="chambreDescription">
//                 <strong>Description:</strong> {chambre.description_chambre}
//               </p>
//               <Link href={`/chambres/${chambre.id}`} className="button">
//                 Voir les détails
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }






import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import './Styleclient.css';
import { Button } from '@mui/material';
import Footer from '@/Layouts/Footer';

export default function AfficherChambres({ chambres }) {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState('en'); // Default language
  const [filteredChambres, setFilteredChambres] = useState([]);
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
    const filtered = chambres.filter((chambre) => {
      const { dateDebut, dateFin, nbrPersonne, typeChambre } = filters;
      const matchDateDebut = !dateDebut || new Date(chambre.date_dispo_debut) >= new Date(dateDebut);
      const matchDateFin = !dateFin || new Date(chambre.date_dispo_fin) <= new Date(dateFin);
      const matchNbrPersonne = !nbrPersonne || chambre.nbr_personne >= parseInt(nbrPersonne);
      const matchTypeChambre = !typeChambre || chambre.typeChambre === typeChambre;
      return matchDateDebut && matchDateFin && matchNbrPersonne && matchTypeChambre;
    });
    setFilteredChambres(filtered);
  }, [filters, chambres]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
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
    roomType= 'Room Types',
    Home="Home",
    Reservations="Reservations",
    Service="Service",
    Rooms="Rooms",
    login="login",
    signup="sign up",
    startDate = ' Start Date',
   endDate ='End Date',
    personCount ='number of people',
    roomList =' list of rooms',
    price = 'price ',
   description = 'Description',
    seeDetails = 'view the details',
    all = 'All',
    standard = 'Standard',
   double ='Double',
    twin ='Twin',
    luxe = 'Luxe',
    family= 'Family',
    executive = 'Executive',
    withView = 'with a view',
  } = translations;

  return (
    <div className="container">
      <div className="navbar">
        <img src="image/logoh.png" alt="" />
        <Link to="/">{Home}</Link>
        <Link to="/chambres">{Reservations}</Link>
        <Link to="/chambres">{Service}</Link>
        <Link to="/chambres">{Rooms}</Link>
        <select onChange={handleLanguageChange} className="language-select" value={language}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
          <option value="es">Español</option>
        </select>
        <button><Link to="/contact">{login}</Link></button>
        <button><Link to="/contact">{signup}</Link></button>
      </div>

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
            <option value="standard">{standard}</option>
            <option value="double">{double}</option>
            <option value="twin">{twin}</option>
            <option value="luxe">{luxe}</option>
            <option value="familaile">{family}</option>
            <option value="executive">{executive}</option>
            <option value="avecVue">{withView}</option>
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
          {filteredChambres.map((chambre) => (
            <div key={chambre.id} className="chambre">
              {chambre.image1 && (
                <img src={route('chambre.image', { image: chambre.image1 })} alt="image" />
              )}
              <h2 className="chambreTitle">{translations[`translated_nom_chambre`] || chambre.nom_chambre}</h2>
              <p className="chambrePrice">
                <strong>{price}:</strong> {chambre.prix_chambre} €
              </p>
              <p className="chambreDescription">
                <strong>{description}:</strong> {translations[`translated_description_chambre`] || chambre.description_chambre}
              </p>
              <Link href={`/chambres/${chambre.id}`} className="button">
                {seeDetails}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}


