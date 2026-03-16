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
            Proyectos que hablan por nosotros
          </h2>
          <p className="banner-hangar__parrafo">
            A lo largo de más de tres décadas hemos concretado cientos de obras de estructuras metálicas, tinglados, galpones y techos. Empresas de distintos rubros confiaron en nosotros para llevar adelante sus proyectos. Calidad, responsabilidad y atención personalizada en cada obra.
          </p>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

export default BannerHangar;
