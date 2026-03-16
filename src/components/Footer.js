import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './Footer.css';

function Footer({ onLogoClick }) {
  const handleLogoClick = (e) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  return (
    <footer id="pie" className="footer">
      <div className="footer__contenido">
        <AnimateOnScroll className="footer__col footer__col--logo" delay={0}>
          <a href="#inicio" className="footer__logo-link" onClick={handleLogoClick}>
            <img
              src="/img/logo/logo-acosta.jpeg"
              alt="Logo"
              className="footer__logo"
            />
          </a>
          <p className="footer__tagline">Especialistas en estructuras, tinglados y galpones</p>
          <p className="footer__desc">
            Soluciones a medida para tu proyecto. Calidad y experiencia en cada obra.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="footer__col" delay={80}>
          <h3 className="footer__titulo">Enlaces útiles</h3>
          <ul className="footer__lista">
            <li><a href="#inicio" className="footer__link">Inicio</a></li>
            <li><a href="#nosotros" className="footer__link">Nosotros</a></li>
            <li><a href="#contacto" className="footer__link">Contacto</a></li>
            <li><a href="#contacto" className="footer__link">Contacto</a></li>
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll className="footer__col" delay={160}>
          <h3 className="footer__titulo">Contacto</h3>
          <ul className="footer__lista footer__lista--contacto">
            <li>
              <span className="footer__icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>Tel: (011) 1234-5678</span>
            </li>
            <li>
              <span className="footer__icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <a href="mailto:contacto@ejemplo.com" className="footer__link">contacto@ejemplo.com</a>
            </li>
            <li>
              <span className="footer__icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <span>WhatsApp: 11 1234-5678</span>
            </li>
            <li>
              <span className="footer__icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Lautaro 868, Merlo, Buenos Aires</span>
            </li>
            <li>
              <span className="footer__icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <span>Lun. a Vie.: 8:00 a 17:00 hs</span>
            </li>
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll className="footer__col" delay={240}>
          <h3 className="footer__titulo">Legales</h3>
          <ul className="footer__lista">
            <li><a href="/politica-privacidad" className="footer__link">Políticas de privacidad</a></li>
            <li><a href="/terminos-y-condiciones" className="footer__link">Términos y condiciones</a></li>
            <li><a href="/politica-cookies" className="footer__link">Política de cookies</a></li>
          </ul>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll className="footer__bottom" delay={120}>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Acosta Estructuras. Todos los derechos reservados.
        </p>
      </AnimateOnScroll>
    </footer>
  );
}

export default Footer;
