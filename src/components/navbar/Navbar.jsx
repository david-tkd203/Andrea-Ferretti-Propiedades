import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/andreaFP.png" alt="Logo empresa" className="logo" />
      </div>
      <div className="nav-items">
        <Link to="/">Inicio</Link>
        <Link to="/operacion/arriendos">Arriendos</Link>
        <Link to="/operacion/terrenos">Terrenos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div className="cart-widget">
        <Link to="/carrito">Carrito</Link>
      </div>
    </nav>
  );
}

export default Navbar;
