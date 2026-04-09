import React, { useState, useEffect } from 'react';
import './ConsultaModal.css';

const MAX_CARACTERES = 300;

function ConsultaModal({ isOpen, onClose, numeroWhatsApp }) {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if (!isOpen) setMensaje('');
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleIrAlChat = () => {
    const texto = mensaje.trim() || '';
    const textoCodificado = texto ? encodeURIComponent(texto) : '';
    const esResponsive = window.matchMedia('(max-width: 768px)').matches;

    if (esResponsive) {
      // En mobile intentamos abrir la app. Si no está instalada, cae a wa.me
      const appUrl = `whatsapp://send?phone=${numeroWhatsApp}${textoCodificado ? `&text=${textoCodificado}` : ''}`;
      const fallbackUrl = `https://wa.me/${numeroWhatsApp}${textoCodificado ? `?text=${textoCodificado}` : ''}`;
      window.location.href = appUrl;
      setTimeout(() => {
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
      }, 900);
    } else {
      // En desktop abrimos WhatsApp Web directamente
      const webUrl = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}${textoCodificado ? `&text=${textoCodificado}` : ''}`;
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="consulta-modal" role="dialog" aria-modal="true" aria-labelledby="consulta-modal-titulo">
      <div className="consulta-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="consulta-modal__ventana">
        <div className="consulta-modal__encabezado">
          <h2 id="consulta-modal-titulo" className="consulta-modal__titulo">Realiza tu consulta:</h2>
          <button
            type="button"
            className="consulta-modal__cerrar"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        <div className="consulta-modal__cuerpo">
          <div className="consulta-modal__textarea-wrap">
            <textarea
              className="consulta-modal__textarea"
              placeholder="Escribe tu mensaje aquí..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value.slice(0, MAX_CARACTERES))}
              maxLength={MAX_CARACTERES}
              rows={5}
            />
            <span className="consulta-modal__contador">{mensaje.length}/{MAX_CARACTERES}</span>
          </div>
          <button
            type="button"
            className="consulta-modal__btn"
            onClick={handleIrAlChat}
          >
            Ir al chat!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsultaModal;
