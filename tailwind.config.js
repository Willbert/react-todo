// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        animation: {
         'spin-slow': 'spin 10s linear infinite',
        }
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '9xl': '8rem',
      }
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }