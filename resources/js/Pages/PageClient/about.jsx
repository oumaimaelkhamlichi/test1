// import React from 'react';
// import './about.css'; // Importer le fichier CSS avec les styles

// const About = () => {
//   return (
//     <section className="about top">
//       <div className="container flex">
//         <div className="left">
//           <div className="heading">
//             <h1>Bienvenue</h1>
//             <h2>Crowny Hotel</h2>
//           </div>
//           <p style={{ width:'500px' }}>Bienvenue à notre hôtel, où le luxe rencontre le confort et un service exceptionnel. Notre établissement offre un havre de paix avec des équipements modernes conçus pour répondre aux besoins des voyageurs d'affaires et de loisirs. Des chambres élégamment meublées aux expériences culinaires exquises, nous nous efforçons de rendre chaque séjour mémorable. Notre personnel dévoué est engagé à fournir un service personnalisé pour garantir que votre séjour soit parfait. Que vous soyez ici pour un voyage d'affaires, des vacances en famille ou une escapade romantique, notre hôtel promet une expérience inégalée qui vous laissera détendu et apprécié. Découvrez la combinaison parfaite d'hospitalité et de sophistication avec nous.</p>
//           <button className="primary-btn">ABOUT US</button>
//         </div>
//         <div className="">
//           <img src="images/reception 2.PNG" alt="banner-1" style={{ width:'700px',height:'380px', marginLeft:'90px' }} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
// import React, { useState, useEffect } from 'react';
// import './about.css';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.querySelector('.about');
//       if (aboutSection) {
//         const aboutPosition = aboutSection.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (aboutPosition < windowHeight / 1.5) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className={`about top ${isVisible ? 'visible' : ''}`}>
//       <div className="container flex">
//         <div className="left">
//           <div className="heading">
//             <h1>Bienvenue</h1>
//             <h2>Crowny Hotel</h2>
//           </div>
//           <p style={{ width: '500px' }}>Bienvenue à notre hôtel, où le luxe rencontre le confort et un service exceptionnel. Notre établissement offre un havre de paix avec des équipements modernes conçus pour répondre aux besoins des voyageurs d'affaires et de loisirs. Des chambres élégamment meublées aux expériences culinaires exquises, nous nous efforçons de rendre chaque séjour mémorable. Notre personnel dévoué est engagé à fournir un service personnalisé pour garantir que votre séjour soit parfait. Que vous soyez ici pour un voyage d'affaires, des vacances en famille ou une escapade romantique, notre hôtel promet une expérience inégalée qui vous laissera détendu et apprécié. Découvrez la combinaison parfaite d'hospitalité et de sophistication avec nous.</p>
//           <button className="primary-btn">ABOUT US</button>
//         </div>
//         <div className="">
//           <img src="images/reception 2.PNG" alt="banner-1" style={{ width: '700px', height: '380px', marginLeft: '90px' }} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
// import React, { useState, useEffect } from 'react';
// import './about.css';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.querySelector('.about');
//       if (aboutSection) {
//         const aboutPosition = aboutSection.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (aboutPosition < windowHeight / 1.5) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section className={`about top ${isVisible ? 'visible' : ''}`}>
//       <div className="container flex">
//         <div className={`left ${isVisible ? 'visible' : ''}`}>
//           <div className="heading">
//             <h1 style={{ color:'#453c1f', }}>Bienvenue</h1>
//             <h2>Crowny Hotel</h2>
//           </div>
//           <p style={{ width: '500px' }}>Bienvenue à notre hôtel, où le luxe rencontre le confort et un service exceptionnel. Notre établissement offre un havre de paix avec des équipements modernes conçus pour répondre aux besoins des voyageurs d'affaires et de loisirs. Des chambres élégamment meublées aux expériences culinaires exquises, nous nous efforçons de rendre chaque séjour mémorable. Notre personnel dévoué est engagé à fournir un service personnalisé pour garantir que votre séjour soit parfait. Que vous soyez ici pour un voyage d'affaires, des vacances en famille ou une escapade romantique, notre hôtel promet une expérience inégalée qui vous laissera détendu et apprécié. Découvrez la combinaison parfaite d'hospitalité et de sophistication avec nous.</p>
//           <button className="primary-btn">ABOUT US</button>
//         </div>
//         <div className="">
//           <img src="images/reception 2.PNG" alt="banner-1" style={{ width: '800px', height: '380px', marginLeft: '90px',marginTop:'10px' }} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useState, useEffect } from 'react';
import './about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about');
      if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (aboutPosition < windowHeight / 1.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`about top ${isVisible ? 'visible' : ''}`}>
      <div className="container flex">
        <div className={`left ${isVisible ? 'visible' : ''}`}>
          <div className="heading">
            <h1 style={{ color: '#453c1f' }}>Bienvenue</h1>
            <h2>Crowny Hotel</h2>
          </div>
          <p style={{ width: '500px' }}>Bienvenue à notre hôtel, où le luxe rencontre le confort et un service exceptionnel. Notre établissement offre un havre de paix avec des équipements modernes conçus pour répondre aux besoins des voyageurs d'affaires et de loisirs. Des chambres élégamment meublées aux expériences culinaires exquises, nous nous efforçons de rendre chaque séjour mémorable. Notre personnel dévoué est engagé à fournir un service personnalisé pour garantir que votre séjour soit parfait. Que vous soyez ici pour un voyage d'affaires, des vacances en famille ou une escapade romantique, notre hôtel promet une expérience inégalée qui vous laissera détendu et apprécié. Découvrez la combinaison parfaite d'hospitalité et de sophistication avec nous.</p>
          <button className="primary-btn">ABOUT US</button>
        </div>
        <div className="">
          <img src="image/chambre6.jpg" alt="banner-1" style={{ width: '800px', height: '380px', marginLeft: '90px', marginTop: '10px' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
