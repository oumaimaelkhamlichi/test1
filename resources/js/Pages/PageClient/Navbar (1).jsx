import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function Navbar({ language, handleLanguageChange, translations }) {
  const {
    Home = 'Home',
    Reservations = 'Reservations',
    Service = 'Service',
    Rooms = 'Rooms',
    login = 'Login',
    signup = 'Sign Up',
  } = translations;

  return (
    <div className="navbar">
      <img src="image/logoh.png" alt="Logo" />
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
  );
}

export default Navbar;