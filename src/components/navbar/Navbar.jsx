import './Navbar.css'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/andreaFP.png" alt="Logo empresa" className="logo" />
      </div>
      <div className="nav-items">
        <a href="#">Inicio</a>
        <a href="#">Arriendos</a>
        <a href="#">Terrenos</a>
        <a href="#">Contacto</a>
      </div>
      <div class= "cart-widget">
        <carwidget> <a href="#">Inicio</a> </carwidget>
      </div>
    </nav>
  );
}

export default Navbar;
