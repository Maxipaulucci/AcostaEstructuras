import React, { useState } from 'react';
import MarqueeBar from './components/MarqueeBar';
import Navbar from './components/Navbar';
import LogoModal from './components/LogoModal';
import Carousel from './components/Carousel';
import Valores from './components/Valores';
import SeccionContacto from './components/SeccionContacto';
import SeccionProyectos from './components/SeccionProyectos';
import EmpresaCards from './components/EmpresaCards';
import BannerHangar from './components/BannerHangar';
import Footer from './components/Footer';
// eslint-disable-next-line no-unused-vars -- usado como <WhatsAppFloat /> en el JSX
import WhatsAppFloat from './components/WhatsAppFloat';
import { useInView } from './hooks/useInView';
import './App.css';

const opcionesVista = { threshold: 0.15, rootMargin: '0px 0px -80px 0px' };
const WHATSAPP_NUMERO = '5491153837427';
const MENSAJE_COTIZACION = 'Hola, quiero una cotización.';

function App() {
  const [tituloRef, tituloVisible] = useInView(opcionesVista);
  const [texto1Ref, texto1Visible] = useInView(opcionesVista);
  const [texto2Ref, texto2Visible] = useInView(opcionesVista);
  const [ctaRef, ctaVisible] = useInView(opcionesVista);
  const [showLogoModal, setShowLogoModal] = useState(false);

  const handleCotizarClick = (e) => {
    e.preventDefault();

    const texto = encodeURIComponent(MENSAJE_COTIZACION);
    const esResponsive = window.matchMedia('(max-width: 768px)').matches;

    if (esResponsive) {
      const appUrl = `whatsapp://send?phone=${WHATSAPP_NUMERO}&text=${texto}`;
      const fallbackUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
      window.location.href = appUrl;
      setTimeout(() => {
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
      }, 900);
      return;
    }

    const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${texto}`;
    window.open(webUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      {showLogoModal && (
        <LogoModal onClose={() => setShowLogoModal(false)} />
      )}
      <MarqueeBar />
      <Navbar onLogoClick={() => setShowLogoModal(true)} />
      <Carousel />

      <section className="nosotros">
        <div className="nosotros__contenido">
          <div
            ref={tituloRef}
            className={`nosotros__linea ${tituloVisible ? 'nosotros__linea--visible' : ''}`}
          >
            <h2 className="nosotros__titulo">
              {'Construcciones metalicas'.split(/\s+/).map((palabra, i) => (
                <span
                  key={i}
                  className="nosotros__titulo-palabra"
                  style={{ animationDelay: `${i * 0.18}s` }}
                >
                  {palabra}
                </span>
              ))}
            </h2>
          </div>
          <div
            ref={texto1Ref}
            className={`nosotros__linea ${texto1Visible ? 'nosotros__linea--visible' : ''}`}
          >
            <p className="nosotros__texto nosotros__texto--animado">
              Fabricacion, montaje y techado de estructuras metalicas reticuladas
              <br />
              y alma llena.
            </p>
          </div>
          <div
            ref={texto2Ref}
            className={`nosotros__linea ${texto2Visible ? 'nosotros__linea--visible' : ''}`}
          >
            <p className="nosotros__texto nosotros__texto--animado">
              Tinglados, Galpones, Hangares, Naves industriales, Entrepisos.
              <span className="nosotros__texto-separado">
                Trabajos y proyectos a lo largo y ancho del pais.
              </span>
            </p>
          </div>
          <div
            ref={ctaRef}
            className={`nosotros__linea nosotros__cta-wrap ${ctaVisible ? 'nosotros__linea--visible' : ''}`}
          >
            <a href="#contacto" className="nosotros__cta nosotros__cta--animado" onClick={handleCotizarClick}>Cotizar &gt;</a>
          </div>
        </div>
      </section>

      <BannerHangar />

      <EmpresaCards />

      <Valores />

      <SeccionContacto />

      <SeccionProyectos />

      <Footer onLogoClick={() => setShowLogoModal(true)} />

      <WhatsAppFloat />
    </div>
  );
}

export default App;
