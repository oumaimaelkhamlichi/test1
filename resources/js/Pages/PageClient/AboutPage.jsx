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
        <div className="left">
        <h3 style={{ fontSize:'50px', marginBottom:"30px"}}>Expérience Culinaire </h3>
          <p>
            À Cozy Suites, nous sommes fiers d'offrir une expérience culinaire exquise qui répond à tous les palais. Notre équipe de chefs de renommée mondiale prépare méticuleusement chaque plat en utilisant les ingrédients les plus fins et les plus frais pour garantir une expérience culinaire mémorable.
          </p>
          <p>
            Notre restaurant propose un menu diversifié mettant en valeur le meilleur des cuisines locales et internationales. Des petits déjeuners copieux aux dîners élégants, chaque repas est préparé à la perfection. Savourez les saveurs de nos plats signatures, notamment :
          </p>
          
          <p>
            Que vous savouriez un repas décontracté en famille, un dîner romantique à deux ou un festin de célébration entre amis, Cozy Suites promet une expérience culinaire qui dépassera vos attentes. Rejoignez-nous et découvrez pourquoi notre restaurant est une destination prisée des amateurs de gastronomie.
          </p>
        </div>
        <div className="right">
           <img src="image/food1.jpg" alt="cuisine" style={{ width: '500px', height: '270px', marginLeft: '100px', marginTop: '10px' }} />
           <img src="image/food2.jpg" alt="cuisine" style={{width: '450px', height: '270px', marginLeft: '-30px', marginTop: '-90px' }} />
         
         
        </div>
      </div>
    </section>
  );
};

export default About;








             



