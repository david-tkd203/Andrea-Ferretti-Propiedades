import './Navbar.css'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo empresa" className="logo" />
        <span className="logo-text">Andrea Ferretti Propiedades</span>
      </div>
      <div className="nav-items">
        <a href="#">Inicio</a>
        <a href="#">Arriendos</a>
        <a href="#">Terrenos</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
