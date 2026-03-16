import React, { useEffect } from 'react';
import './LogoModal.css';

const LOGO_SRC = '/img/logo/logo-acosta.jpeg';

function LogoModal({ onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="logo-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vista del logo"
    >
      <div className="logo-modal__backdrop" />
      <button
        type="button"
        className="logo-modal__cerrar"
        onClick={onClose}
        aria-label="Cerrar"
      >
        ×
      </button>
      <div
        className="logo-modal__contenido"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={LOGO_SRC}
          alt="Logo"
          className="logo-modal__imagen"
        />
      </div>
    </div>
  );
}

export default LogoModal;
