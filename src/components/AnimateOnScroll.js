import React from 'react';
import { useInView } from '../hooks/useInView';
import './AnimateOnScroll.css';

/**
 * Envuelve contenido y lo anima con slide-up cuando entra en vista (scroll).
 * Similar al efecto de mitinglado.com: el texto/imagen aparece desde abajo al hacerse visible.
 */
function AnimateOnScroll({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'animate-on-scroll--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default AnimateOnScroll;
