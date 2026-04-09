import React, { useState, useEffect } from 'react';
import './Carousel.css';

const RUTA_BASE = process.env.PUBLIC_URL || '';

const IMAGENES = [
  encodeURI(`${RUTA_BASE}/img/proyectos/proyecto inicio/proyecto 1.webp`),
  encodeURI(`${RUTA_BASE}/img/proyectos/proyecto inicio/proyecto 2.png`),
  encodeURI(`${RUTA_BASE}/img/proyectos/proyecto inicio/proyecto 3.jpg`),
  encodeURI(`${RUTA_BASE}/img/proyectos/proyecto inicio/proyecto 4.jpg`),
  encodeURI(`${RUTA_BASE}/img/proyectos/proyecto inicio/proyecto 5.jpg`),
];

const NOMBRES_PROYECTOS = [
  'Proyecto 1',
  'Proyecto 2',
  'Proyecto 3',
  'Proyecto 4',
  'Proyecto 5',
];

const INTERVALO_AUTO = 5000;

function Carousel() {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((i) => (i + 1) % IMAGENES.length);
  };

  const anterior = () => {
    setIndice((i) => (i - 1 + IMAGENES.length) % IMAGENES.length);
  };

  useEffect(() => {
    const id = setInterval(siguiente, INTERVALO_AUTO);
    return () => clearInterval(id);
  }, [indice]);

  return (
    <section className="carousel" aria-label="Galería de proyectos">
      <div className="carousel__banner" aria-hidden="true">
        Proyectos destacados
      </div>
      <div className="carousel__contenedor">
        {IMAGENES.map((src, i) => (
          <div
            key={src}
            className={`carousel__slide ${i === indice ? 'carousel__slide--activo' : ''}`}
            aria-hidden={i !== indice}
          >
            <img
              src={src}
              alt={NOMBRES_PROYECTOS[i]}
              className="carousel__imagen"
            />
            <div className="carousel__overlay" aria-hidden />
          </div>
        ))}
      </div>

      <div className="carousel__texto" key={indice}>
        <h2 className="carousel__titulo">
          {NOMBRES_PROYECTOS[indice].split(/\s+/).map((palabra, i) => (
            <span
              key={i}
              className="carousel__titulo-palabra"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              {palabra}
            </span>
          ))}
        </h2>
      </div>

      <button
        type="button"
        className="carousel__btn carousel__btn--prev"
        onClick={anterior}
        aria-label="Imagen anterior"
      >
        <span className="carousel__btn-icon" aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        className="carousel__btn carousel__btn--next"
        onClick={siguiente}
        aria-label="Siguiente imagen"
      >
        <span className="carousel__btn-icon" aria-hidden="true">›</span>
      </button>

      <div className="carousel__thumbs" role="tablist" aria-label="Seleccionar proyecto">
        {IMAGENES.map((src, i) => (
          <div key={i} className="carousel__thumb-wrap">
            <button
              type="button"
              role="tab"
              aria-selected={i === indice}
              aria-label={`Ir a ${NOMBRES_PROYECTOS[i]}`}
              className={`carousel__thumb ${i === indice ? 'carousel__thumb--activo' : ''}`}
              onClick={() => setIndice(i)}
            >
              <span className="carousel__thumb-img-wrap">
                <img src={src} alt="" className="carousel__thumb-img" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
