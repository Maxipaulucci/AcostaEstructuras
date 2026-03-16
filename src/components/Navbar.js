import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ onLogoClick }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleLogoClick = (e) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  const cerrarMenu = () => setMenuAbierto(false);

  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="navbar">
      <a
        href="#inicio"
        className="navbar__logo"
        aria-label="Inicio"
        onClick={handleLogoClick}
      >
        <img src="/img/logo/logo-acosta.jpeg" alt="Logo" className="navbar__logo-img" />
      </a>

      <nav className="navbar__nav">
        <a href="#inicio" className="navbar__link" onClick={(e) => { handleAnchorClick(e); cerrarMenu(); }}>Inicio</a>
        <a href="#nosotros" className="navbar__link" onClick={(e) => { handleAnchorClick(e); cerrarMenu(); }}>Nosotros</a>
        <a href="#contacto" className="navbar__link" onClick={(e) => { handleAnchorClick(e); cerrarMenu(); }}>Contacto</a>
      </nav>

      <a href="#contacto" className="navbar__cta" onClick={handleAnchorClick}>Contactanos!</a>

      <div className="navbar__hamburger-wrap">
        <button
          type="button"
          className="navbar__hamburger"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
        <div className={`navbar__menu ${menuAbierto ? 'navbar__menu--abierto' : ''}`}>
          <a href="#inicio" className="navbar__menu-link" onClick={(e) => { handleAnchorClick(e); cerrarMenu(); }}>Inicio</a>
          <a href="#nosotros" className="navbar__menu-link" onClick={(e) => { handleAnchorClick(e); cerrarMenu(); }}>Nosotros</a>
          <a href="#contacto" className="navbar__menu-link" onClick={(e) => { handleAnchorClick(e); cerrarMenu(); }}>Contacto</a>
        </div>
      </div>

      <div
        className={`navbar__overlay ${menuAbierto ? 'navbar__overlay--visible' : ''}`}
        onClick={cerrarMenu}
        aria-hidden="true"
      />
    </header>
  );
}

export default Navbar;
