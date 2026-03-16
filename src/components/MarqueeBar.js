import React from 'react';
import './MarqueeBar.css';

const FRASE =
  'Cotizá sin compromiso  •  Galpones y tinglados a medida  •  Más de 20 años de experiencia  •  Presupuesto sin cargo  •  Estructuras metálicas  •  ';

function MarqueeBar() {
  return (
    <div id="inicio" className="marquee-bar" role="marquee" aria-live="polite">
      <div className="marquee-bar__track">
        <span className="marquee-bar__text">{FRASE}</span>
        <span className="marquee-bar__text" aria-hidden="true">
          {FRASE}
        </span>
      </div>
    </div>
  );
}

export default MarqueeBar;
