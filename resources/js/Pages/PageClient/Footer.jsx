import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "#1f1f1f" }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="mb-4 text-center" style={{ color: "#ae9a5e" }}>À propos de Cozy Suites</h3>
          <p className="text-sm">Cozy Suites est un hôtel de luxe offrant un hébergement confortable et élégant pour les voyageurs du monde entier. Avec des chambres spacieuses, des équipements modernes et un service attentionné, nous nous efforçons de rendre chaque séjour inoubliable.</p>
        </div>
        <nav className="mb-9 md:mb-0 md:w-1/3">
          <h3 className="mb-4 text-center" style={{ color: "#ae9a5e" }}>Liens utiles</h3>
          <ul className="list-none p-0 flex flex-wrap justify-center">
            <li className="inline-block mr-4 mb-2">
              <a
                href="#accueil"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-500"
              >
                Accueil
              </a>
            </li>
            <li className="inline-block mr-4 mb-2">
              <a
                href="#chambres"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-500"
              >
                Chambres
              </a>
            </li>
            <li className="inline-block mr-4 mb-2">
              <a
                href="#services"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-500"
              >
                Services
              </a>
            </li>
            <li className="inline-block mr-4 mb-2">
              <a
                href="#offres"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-500"
              >
                Offres spéciales
              </a>
            </li>
            <li className="inline-block mr-4 mb-2">
              <a
                href="#reservations"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-500"
              >
                Réservations
              </a>
            </li>
            <li className="inline-block mr-4 mb-2">
              <a
                href="#contact"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:w-1/3">
          <h3 className="mb-2 text-center" style={{ color: "#ae9a5e" }}>Suivez-nous</h3>
          <ul className="list-none p-0 flex justify-center">
            <li className="mr-4">
              <a
                href="https://www.facebook.com/votre-page-facebook"
                className="text-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-300 p-2 rounded-full"
                style={{ color: "#ba992e" }}
              >
                <FaFacebook />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://twitter.com/votre-page-twitter"
                className="text-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-300 p-2 rounded-full"
                style={{ color: "#ba992e" }}
              >
                <FaTwitter />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://www.instagram.com/votre-page-instagram"
                className="text-400 hover:text-yellow-500 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-300 p-2 rounded-full"
                style={{ color: "#ba992e" }}
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm mt-8 text-center">
        <p>Cozy Suites © 2024. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;









