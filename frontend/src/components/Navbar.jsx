import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <a href="#hero" className="navbar__link">
          Inicio
        </a>
        <a href="#about" className="navbar__link">
          Sobre Nosotros
        </a>
        <a href="#services" className="navbar__link">
          Servicios
        </a>
        <a href="#gallery" className="navbar__link">
          Galería
        </a>
        <a href="#work" className="navbar__link">
          Nuestro Trabajo
        </a>
        <a href="#contact" className="navbar__link">
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
