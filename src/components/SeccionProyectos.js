import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import AnimateOnScroll from './AnimateOnScroll';
import './SeccionProyectos.css';

const RUTA_BASE = process.env.PUBLIC_URL || '';
const RUTA_PROYECTOS = `${RUTA_BASE}/img/proyectos/seccion proyecto`;

/**
 * Una entrada por carpeta numérica bajo `public/img/proyectos/seccion proyecto/<n>/`.
 * Los archivos deben coincidir con los nombres reales (mayús./espacios incluidos).
 */
const DEFINICION_PROYECTOS = [
  {
    id: 1,
    nombre: 'Proyecto 1',
    carpeta: '1',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.41.30 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.41.30.jpeg',
    ],
  },
  {
    id: 2,
    nombre: 'Proyecto 2',
    carpeta: '2',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.41.56 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.41.56.jpeg',
      'WhatsApp Image 2026-04-09 at 13.41.57.jpeg',
    ],
  },
  {
    id: 3,
    nombre: 'Proyecto 3',
    carpeta: '3',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.44.57 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.44.57.jpeg',
      'WhatsApp Image 2026-04-09 at 13.44.58 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.44.58.jpeg',
    ],
  },
  {
    id: 4,
    nombre: 'Proyecto 4',
    carpeta: '4',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.49.09 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.49.09.jpeg',
      'WhatsApp Image 2026-04-09 at 13.49.10 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.49.10.jpeg',
    ],
  },
  {
    id: 5,
    nombre: 'Proyecto 5',
    carpeta: '5',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.51.30.jpeg',
      'WhatsApp Image 2026-04-09 at 13.51.31 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.51.31 (2).jpeg',
      'WhatsApp Image 2026-04-09 at 13.51.31.jpeg',
      'WhatsApp Image 2026-04-09 at 13.51.32.jpeg',
    ],
  },
  {
    id: 6,
    nombre: 'Proyecto 6',
    carpeta: '6',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.52.57 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.52.57.jpeg',
      'WhatsApp Image 2026-04-09 at 13.52.58 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.52.58 (2).jpeg',
      'WhatsApp Image 2026-04-09 at 13.52.58.jpeg',
      'WhatsApp Image 2026-04-09 at 13.52.59 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.52.59.jpeg',
    ],
  },
  {
    id: 7,
    nombre: 'Proyecto 7',
    carpeta: '7',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.54.08.jpeg',
      'WhatsApp Image 2026-04-09 at 13.54.09 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.54.09.jpeg',
    ],
  },
  {
    id: 8,
    nombre: 'Proyecto 8',
    carpeta: '8',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.55.31.jpeg',
      'WhatsApp Image 2026-04-09 at 13.55.32 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.55.32 (2).jpeg',
      'WhatsApp Image 2026-04-09 at 13.55.32.jpeg',
    ],
  },
  {
    id: 9,
    nombre: 'Proyecto 9',
    carpeta: '9',
    archivos: [
      'WhatsApp Image 2026-04-09 at 13.57.25 (1).jpeg',
      'WhatsApp Image 2026-04-09 at 13.57.25 (2).jpeg',
      'WhatsApp Image 2026-04-09 at 13.57.25.jpeg',
    ],
  },
];

function rutaImagen(carpeta, archivo) {
  return `${RUTA_PROYECTOS}/${carpeta}/${archivo}`;
}

const PROYECTOS = DEFINICION_PROYECTOS.map((p) => {
  const ordenados = [...p.archivos].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return {
    id: p.id,
    nombre: p.nombre,
    imagen: rutaImagen(p.carpeta, ordenados[0]),
    imagenes: ordenados.map((f) => rutaImagen(p.carpeta, f)),
  };
});

function getPorLinea() {
  if (typeof window === 'undefined') return 3;
  return window.matchMedia('(max-width: 900px)').matches ? 2 : 3;
}

function ModalGaleria({ proyecto, onCerrar }) {
  const tituloId = `modal-galeria-titulo-${proyecto.id}`;
  const [imagenGrande, setImagenGrande] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (imagenGrande) {
        setImagenGrande(null);
        return;
      }
      onCerrar();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onCerrar, imagenGrande]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      <div
        className="seccion-proyectos-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
      >
        <button
          type="button"
          className="seccion-proyectos-modal__backdrop"
          aria-label="Cerrar galería"
          onClick={onCerrar}
        />
        <div className="seccion-proyectos-modal__panel">
          <div className="seccion-proyectos-modal__cabecera">
            <h3 id={tituloId} className="seccion-proyectos-modal__titulo">
              {proyecto.nombre}
            </h3>
            <button type="button" className="seccion-proyectos-modal__cerrar" onClick={onCerrar} aria-label="Cerrar">
              ×
            </button>
          </div>
          <div className="seccion-proyectos-modal__galeria">
            {proyecto.imagenes.map((src, i) => {
              const srcEncoded = encodeURI(src);
              const altMini = `${proyecto.nombre} — imagen ${i + 1} de ${proyecto.imagenes.length}`;
              return (
                <figure key={src} className="seccion-proyectos-modal__fig">
                  <button
                    type="button"
                    className="seccion-proyectos-modal__thumb"
                    onClick={() => setImagenGrande({ src: srcEncoded, alt: altMini })}
                    aria-label={`Ampliar imagen ${i + 1}`}
                  >
                    <img
                      src={srcEncoded}
                      alt={altMini}
                      className="seccion-proyectos-modal__img"
                      loading="lazy"
                    />
                  </button>
                </figure>
              );
            })}
          </div>
        </div>
      </div>

      {imagenGrande ? (
        <div
          className="seccion-proyectos-modal-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <button
            type="button"
            className="seccion-proyectos-modal-lightbox__backdrop"
            aria-label="Cerrar vista ampliada"
            onClick={() => setImagenGrande(null)}
          />
          <div className="seccion-proyectos-modal-lightbox__marco">
            <button
              type="button"
              className="seccion-proyectos-modal-lightbox__cerrar"
              onClick={() => setImagenGrande(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={imagenGrande.src}
              alt={imagenGrande.alt}
              className="seccion-proyectos-modal-lightbox__img"
              decoding="async"
            />
          </div>
        </div>
      ) : null}
    </>,
    document.body
  );
}

function SeccionProyectos() {
  const carouselSurfaceRef = useRef(null);
  const [flechaTopPx, setFlechaTopPx] = useState(null);
  const [porLinea, setPorLinea] = useState(getPorLinea);
  const [slide, setSlide] = useState(0);
  const [visualSlide, setVisualSlide] = useState(0);
  const [sinTransicion, setSinTransicion] = useState(false);
  const [proyectoModal, setProyectoModal] = useState(null);
  const totalSlides = Math.ceil(PROYECTOS.length / porLinea);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const apply = () => setPorLinea(mq.matches ? 2 : 3);
    apply();
    if (mq.addEventListener) mq.addEventListener('change', apply);
    else mq.addListener(apply);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', apply);
      else mq.removeListener(apply);
    };
  }, []);

  const irAnterior = () => {
    const nextSlide = (slide - 1 + totalSlides) % totalSlides;
    setSlide(nextSlide);
    setVisualSlide(nextSlide);
    setSinTransicion(false);
  };

  const irSiguiente = () => {
    if (totalSlides <= 1) return;

    if (slide < totalSlides - 1) {
      const nextSlide = slide + 1;
      setSlide(nextSlide);
      setVisualSlide(nextSlide);
      setSinTransicion(false);
      return;
    }

    setSlide(0);
    setVisualSlide(totalSlides);
    setSinTransicion(false);
  };

  const PAGES = useMemo(
    () =>
      Array.from({ length: totalSlides }, (_, pageIndex) =>
        PROYECTOS.slice(pageIndex * porLinea, pageIndex * porLinea + porLinea)
      ),
    [totalSlides, porLinea]
  );

  const PAGES_EXT = useMemo(() => {
    if (totalSlides <= 1) return PAGES;
    return [...PAGES, PAGES[0]];
  }, [PAGES, totalSlides]);

  useEffect(() => {
    if (visualSlide > totalSlides) setVisualSlide(totalSlides);
  }, [totalSlides, visualSlide]);

  useEffect(() => {
    setSlide(0);
    setVisualSlide(0);
    setSinTransicion(true);
    requestAnimationFrame(() => setSinTransicion(false));
  }, [porLinea]);

  useLayoutEffect(() => {
    if (totalSlides <= 1) {
      setFlechaTopPx(null);
      return;
    }

    const root = carouselSurfaceRef.current;
    if (!root) return;

    const sync = () => {
      const imgWrap = root.querySelector('.seccion-proyectos__imagen-wrap');
      if (!imgWrap) {
        setFlechaTopPx(null);
        return;
      }
      const rootRect = root.getBoundingClientRect();
      const imgRect = imgWrap.getBoundingClientRect();
      const center = imgRect.top + imgRect.height / 2 - rootRect.top;
      setFlechaTopPx(Number.isFinite(center) ? center : null);
    };

    sync();

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(sync);
      ro.observe(root);
      const firstImg = root.querySelector('.seccion-proyectos__imagen-wrap');
      if (firstImg) ro.observe(firstImg);
    }

    window.addEventListener('resize', sync);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [totalSlides, porLinea]);

  const handleTrackTransitionEnd = () => {
    if (totalSlides > 1 && visualSlide === totalSlides) {
      setSinTransicion(true);
      requestAnimationFrame(() => {
        setVisualSlide(0);
        requestAnimationFrame(() => setSinTransicion(false));
      });
    }
  };

  return (
    <section id="proyectos" className="seccion-proyectos" aria-labelledby="seccion-proyectos-titulo">
      <h2 id="seccion-proyectos-titulo" className="seccion-proyectos__titulo">
        Proyectos
      </h2>

      {proyectoModal ? (
        <ModalGaleria proyecto={proyectoModal} onCerrar={() => setProyectoModal(null)} />
      ) : null}

      <AnimateOnScroll className="seccion-proyectos__carousel-wrap" delay={0}>
        <div
          ref={carouselSurfaceRef}
          className="seccion-proyectos__carousel-surface"
          style={
            flechaTopPx != null
              ? { '--proyectos-flecha-top': `${flechaTopPx}px` }
              : undefined
          }
        >
        <div className="seccion-proyectos__viewport" aria-live="polite">
          <div
            className={`seccion-proyectos__track ${sinTransicion ? 'seccion-proyectos__track--no-transition' : ''}`}
            onTransitionEnd={handleTrackTransitionEnd}
            style={{ transform: `translateX(-${visualSlide * 100}%)` }}
          >
            {PAGES_EXT.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className="seccion-proyectos__page"
                aria-hidden={pageIndex !== slide && pageIndex !== totalSlides}
              >
                <div className="seccion-proyectos__grid">
                  {page.map((proyecto) => (
                    <div key={proyecto.id} className="seccion-proyectos__tarjeta">
                      <div className="seccion-proyectos__imagen-wrap">
                        <img
                          src={encodeURI(proyecto.imagen)}
                          alt={proyecto.nombre}
                          className="seccion-proyectos__imagen"
                          loading="lazy"
                        />
                      </div>
                      <div className="seccion-proyectos__tarjeta-pie">
                        <h3 className="seccion-proyectos__nombre">{proyecto.nombre}</h3>
                        <button
                          type="button"
                          className="seccion-proyectos__ver-mas"
                          onClick={() => setProyectoModal(proyecto)}
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalSlides > 1 && (
          <>
            <button
              type="button"
              className="seccion-proyectos__btn seccion-proyectos__btn--prev"
              onClick={irAnterior}
              aria-label="Proyectos anteriores"
            >
              <span className="seccion-proyectos__flecha" aria-hidden="true">
                ‹
              </span>
            </button>
            <button
              type="button"
              className="seccion-proyectos__btn seccion-proyectos__btn--next"
              onClick={irSiguiente}
              aria-label="Siguientes proyectos"
            >
              <span className="seccion-proyectos__flecha" aria-hidden="true">
                ›
              </span>
            </button>
            <div className="seccion-proyectos__dots" role="tablist" aria-label="Seleccionar página de proyectos">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === slide}
                  aria-label={`Ir a página ${i + 1}`}
                  className={`seccion-proyectos__dot ${i === slide ? 'seccion-proyectos__dot--activo' : ''}`}
                  onClick={() => {
                    setSlide(i);
                    setVisualSlide(i);
                    setSinTransicion(false);
                  }}
                />
              ))}
            </div>
          </>
        )}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="seccion-proyectos__cta-wrap" delay={100}>
        <p className="seccion-proyectos__cta-texto">¿Quieres ver más?</p>
        {/* Cuando tengas el PDF, reemplazá este botón por: <a href="/folleto.pdf" target="_blank" rel="noopener noreferrer" className="seccion-proyectos__cta-btn">Ver folleto</a> */}
        <button type="button" className="seccion-proyectos__cta-btn">
          Ver folleto
        </button>
      </AnimateOnScroll>
    </section>
  );
}

export default SeccionProyectos;
