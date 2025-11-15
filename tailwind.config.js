/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'fadeIn': 'fadeIn 0.3s ease-out',
        'zoomIn': 'zoomIn 0.3s ease-out',
        'snow': 'snow linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'hoverGlow': 'hoverGlow 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        zoomIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        snow: {
          '0%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) translateX(var(--snow-x, 0)) rotate(360deg)',
            opacity: '0',
          },
        },
        twinkle: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(235, 39, 67, 0.4), 0 0 40px rgba(235, 39, 67, 0.3), 0 0 60px rgba(235, 39, 67, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(235, 39, 67, 0.6), 0 0 60px rgba(235, 39, 67, 0.5), 0 0 80px rgba(235, 39, 67, 0.3)',
          },
        },
        hoverGlow: {
          '0%, 100%': {
            boxShadow: '0 25px 50px -12px rgba(235, 39, 67, 0.5)',
          },
          '50%': {
            boxShadow: '0 35px 70px -12px rgba(235, 39, 67, 0.7), 0 0 40px rgba(235, 39, 67, 0.4)',
          },
        },
      },
    },
  },
  plugins: [],
}

