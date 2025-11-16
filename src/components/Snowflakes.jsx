import { useEffect, useRef } from 'react';

export default function Snowflakes() {
  const containerRef = useRef(null);
  const particlesInitialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || particlesInitialized.current || typeof window === 'undefined') return;

    // Load particles.js from CDN
    const loadParticlesFromCDN = () => {
      // Check if particles.js is already loaded
      if (window.particlesJS) {
        initializeParticles();
        return;
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src*="particles.js"]')) {
        // Wait for it to load
        const checkInterval = setInterval(() => {
          if (window.particlesJS) {
            clearInterval(checkInterval);
            initializeParticles();
          }
        }, 100);
        return;
      }

      // Load particles.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = () => {
        initializeParticles();
      };
      script.onerror = () => {
        console.error('Failed to load particles.js from CDN');
      };
      document.head.appendChild(script);
    };

    const initializeParticles = () => {
      if (!containerRef.current || !window.particlesJS) return;
      
      particlesInitialized.current = true;
      
      window.particlesJS('snow-particles', {
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'bottom',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      });
    };

    loadParticlesFromCDN();

    // Cleanup function
    return () => {
      particlesInitialized.current = false;
      const canvas = document.querySelector('#snow-particles .particles-js-canvas-el');
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="snow-particles"
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
    />
  );
}
