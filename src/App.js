import React, { useState } from 'react';
import MarqueeBar from './components/MarqueeBar';
import Navbar from './components/Navbar';
import LogoModal from './components/LogoModal';
import Carousel from './components/Carousel';
import Valores from './components/Valores';
import SeccionContacto from './components/SeccionContacto';
import EmpresaCards from './components/EmpresaCards';
import BannerHangar from './components/BannerHangar';
import Footer from './components/Footer';
// eslint-disable-next-line no-unused-vars -- usado como <WhatsAppFloat /> en el JSX
import WhatsAppFloat from './components/WhatsAppFloat';
import { useInView } from './hooks/useInView';
import './App.css';

const opcionesVista = { threshold: 0.15, rootMargin: '0px 0px -80px 0px' };

function App() {
  const [tituloRef, tituloVisible] = useInView(opcionesVista);
  const [texto1Ref, texto1Visible] = useInView(opcionesVista);
  const [texto2Ref, texto2Visible] = useInView(opcionesVista);
  const [ctaRef, ctaVisible] = useInView(opcionesVista);
  const [showLogoModal, setShowLogoModal] = useState(false);

  return (
    <div className="App">
      {showLogoModal && (
        <LogoModal onClose={() => setShowLogoModal(false)} />
      )}
      <MarqueeBar />
      <Navbar onLogoClick={() => setShowLogoModal(true)} />
      <Carousel />

      <section id="nosotros" className="nosotros">
        <div className="nosotros__contenido">
          <div
            ref={tituloRef}
            className={`nosotros__linea ${tituloVisible ? 'nosotros__linea--visible' : ''}`}
          >
            <h2 className="nosotros__titulo">
              {'Tinglado, Galpones y Techos'.split(/\s+/).map((palabra, i) => (
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
              Si necesitas un techo, galpón, tinglado o alero, No dudes
              <br />
              en comunicarte con nosotros » Somos especialistas.
            </p>
          </div>
          <div
            ref={texto2Ref}
            className={`nosotros__linea ${texto2Visible ? 'nosotros__linea--visible' : ''}`}
          >
            <p className="nosotros__texto nosotros__texto--animado">
              Somos Fabricantes de tinglados, techos, galpones,
              <br />
              hangares, naves industriales, entre pisos y aleros.
            </p>
          </div>
          <div
            ref={ctaRef}
            className={`nosotros__linea nosotros__cta-wrap ${ctaVisible ? 'nosotros__linea--visible' : ''}`}
          >
            <a href="#contacto" className="nosotros__cta nosotros__cta--animado">tasar</a>
          </div>
        </div>
      </section>

      <BannerHangar />

      <EmpresaCards />

      <Valores />

      <SeccionContacto />

      <Footer onLogoClick={() => setShowLogoModal(true)} />

      <WhatsAppFloat />
    </div>
  );
}

export default App;
