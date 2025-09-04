/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1f2937',
        'action-green': '#10b981',
        'light-background': '#f9fafb',
        'dark-background': '#111827',
        'text-gray': '#4b5563',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};