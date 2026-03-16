import React from 'react';
import './Valores.css';

const ITEMS = [
  {
    titulo: 'Calidad',
    texto: 'Somos distribuidores oficiales de las marcas líderes del mercado.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    titulo: 'Garantía',
    texto: 'Nuestros trabajos cuentan con garantía.',
    icono: (
      <svg viewBox="0 0 24 24">
        <path d="M12 1 L4 5 L4 11 C4 17 12 21 L12 1 Z" fill="#fff" />
        <path d="M12 1 L20 5 L20 11 C20 17 12 21 L12 1 Z" fill="currentColor" />
        <path d="M12 1 L4 5 L4 11 C4 17 12 21 12 21 C12 21 20 17 20 11 L20 5 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titulo: 'Envíos',
    texto: 'Hacemos envíos a todo el país.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    titulo: 'Compra segura',
    texto: 'Tus datos, 100% protegidos.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

const MAPA_EMBED =
  'https://www.google.com/maps?q=Lautaro+868,+Merlo,+Buenos+Aires,+Argentina&output=embed';

function Valores() {
  return (
    <section id="valores" className="valores">
      <div className="valores__columnas">
        {ITEMS.map((item, i) => (
          <React.Fragment key={item.titulo}>
            <div className="valores__item">
              <div className="valores__icono">{item.icono}</div>
              <h3 className="valores__titulo">{item.titulo}</h3>
              <p className="valores__texto">{item.texto}</p>
            </div>
            {i < ITEMS.length - 1 && <div className="valores__separador" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
      <div className="valores__mapa-wrap">
        <iframe
          title="Ubicación: Lautaro 868, Merlo, Buenos Aires"
          src={MAPA_EMBED}
          className="valores__mapa"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Valores;
