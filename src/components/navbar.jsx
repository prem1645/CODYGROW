import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import whiteLogo from '../assets/images/whitelogo.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={whiteLogo} alt="Logo" className="logon" />
        <span className="brand-name">CODYGROW</span>
      </div>

      <ul className="navbar-center">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>

      <button onClick={() => navigate('/login')}>Login</button>
    </nav>
  );
}

export default Navbar;

