
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '50%': { transform: 'translateY(-50%) rotate(15deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 10s infinite',
      },
    },
  },
  plugins: [],
}

