import { useState, useEffect, useRef } from 'react';

/**
 * Hook que detecta cuando un elemento entra en el viewport.
 * Útil para animaciones al hacer scroll (ej: slide-up cuando se hace visible).
 * @param {Object} options - Opciones del Intersection Observer
 * @param {number} options.threshold - Porcentaje visible (0-1) para considerar "visible"
 * @param {string} options.rootMargin - Margen del viewport (ej: "0px 0px -50px 0px")
 * @returns {[React.RefObject, boolean]} [ref para el elemento, si está visible]
 */
export function useInView(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isInView];
}
