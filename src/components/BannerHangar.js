import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './BannerHangar.css';

const RUTA_BASE = process.env.PUBLIC_URL || '';
const IMAGEN_HANGAR = `${RUTA_BASE}/img/hangar/hangar.png`;

function BannerHangar() {
  return (
    <AnimateOnScroll className="banner-hangar-wrap" delay={0}>
      <section className="banner-hangar" aria-labelledby="banner-hangar-titulo">
        <div className="banner-hangar__imagen-wrap">
          <img
            src={IMAGEN_HANGAR}
            alt="Proyecto de hangar"
            className="banner-hangar__imagen"
            loading="lazy"
          />
        </div>
        <div className="banner-hangar__texto-wrap">
          <h2 id="banner-hangar-titulo" className="banner-hangar__titulo">
            SISTEMA LLAVE EN MANO
          </h2>
          <p className="banner-hangar__parrafo">
            Ofrecemos al cliente la posibilidad de llevar a cabo su proyecto desde el principio al fin de la obra.
            Movimiento de suelo, nivelaciones, entoscado, fundaciones, piso industrial.
            Toda la obra civil y metalica en una sola empresa, facilitando la contratacion, acortando tiempos, aumentando precision y calidad de terminacion.
          </p>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

export default BannerHangar;
