import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './EmpresaCards.css';

const RUTA_BASE = process.env.PUBLIC_URL || '';

/* Opciones de texto introductorio (elegí una y asignala a TEXTO_NOSOTROS más abajo):

OPCIÓN 1 — Desde 1985 acompañamos a usted y su empresa, ofreciendo el mejor asesoramiento y llevando a cabo obras de primer nivel.

OPCIÓN 2 — Brindamos soluciones sólidas y perdurables para cada uno de tus proyectos, porque la satisfacción de nuestros clientes es nuestra prioridad. Durante más de tres décadas hemos construido una reputación basada en la excelencia en el servicio y la atención personalizada.

OPCIÓN 3 — Nos impulsa crear proyectos con identidad propia, donde el diseño y la calidad se traducen en bienestar. Trabajamos de forma integral, acompañando todas las etapas del proceso con compromiso y trato cercano, para garantizar obras con resultados únicos y a la medida de cada cliente.

OPCIÓN 4 — Desde nuestros inicios estamos junto a usted y su empresa: asesoramos con dedicación y realizamos obras que perduran en el tiempo.

OPCIÓN 5 — Ofrecemos soluciones confiables y duraderas para cada proyecto. La satisfacción del cliente es lo primero; por eso, tras décadas de trabajo, nuestra trayectoria se basa en la excelencia y la atención personalizada.

OPCIÓN 6 — Nos motiva crear proyectos con identidad, donde diseño y calidad generan bienestar. Acompañamos todas las etapas del proceso con compromiso y atención personalizada, para lograr obras únicas y a la medida de cada necesidad.
*/

const TEXTO_NOSOTROS =
  'Desde 1985 acompañamos a usted y su empresa, brindando el mejor asesoramiento y llevando a cabo obras de primer nivel.';

const TARJETAS = [
  {
    id: 'planeacion',
    imagen: `${RUTA_BASE}/img/nosotros/planeacion.jpeg`,
    titulo: 'Planeación',
    texto: 'Nos esforzamos por trabajar junto a los mejores proveedores del sector, lo que nos permite garantizar que cada proyecto se lleve a cabo con altos estándares de calidad y a precios competitivos. Nuestra experiencia y compromiso nos permiten ofrecer soluciones eficientes, seguras y adaptadas a las necesidades de cada proyecto.',
  },
  {
    id: 'materiales',
    imagen: `${RUTA_BASE}/img/nosotros/materiales.jpg`,
    titulo: 'Materiales',
    texto: 'Proporcionamos una amplia variedad de alternativas para cada proyecto, combinando materiales de calidad y un trabajo preciso en cada detalle. Analizamos las necesidades de cada cliente para dar soluciones funcionales y duraderas. Acompañamos todo el proceso, desde la planificación inicial hasta la finalización de la obra, garantizando un resultado acorde a las expectativas.',
  },
  {
    id: 'construccion',
    imagen: `${RUTA_BASE}/img/nosotros/construccion.webp`,
    titulo: 'Objetivo',
    texto: 'Ofrecemos soluciones confiables y duraderas para cada proyecto, porque la satisfacción de nuestros clientes es nuestra principal prioridad. A lo largo de más de tres décadas de trabajo, hemos construido una trayectoria sólida basada en la calidad del servicio, la responsabilidad y la atención personalizada. Cada obra que realizamos refleja nuestro compromiso con la excelencia y el trato cercano que nos distingue en el sector.',
  },
];

function EmpresaCards() {
  return (
    <section className="empresa-cards" aria-labelledby="nosotros-cards-titulo">
      <h2 id="nosotros-cards-titulo" className="empresa-cards__titulo-seccion">
        Nosotros
      </h2>
      <div className="empresa-cards__linea" aria-hidden="true" />
      <AnimateOnScroll className="empresa-cards__intro" delay={50}>
        <p className="empresa-cards__intro-texto">{TEXTO_NOSOTROS}</p>
      </AnimateOnScroll>
      <div className="empresa-cards__grid">
        {TARJETAS.map((item, i) => (
          <AnimateOnScroll
            key={item.id}
            className={`empresa-cards__tarjeta ${item.id === 'construccion' ? 'empresa-cards__tarjeta--objetivo' : ''}`}
            delay={i * 100}
          >
            <div className="empresa-cards__imagen-wrap">
              <img
                src={item.imagen}
                alt=""
                className="empresa-cards__imagen"
                loading="lazy"
              />
            </div>
            <h3 className="empresa-cards__titulo">{item.titulo}</h3>
            <p className="empresa-cards__texto">{item.texto}</p>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

export default EmpresaCards;
