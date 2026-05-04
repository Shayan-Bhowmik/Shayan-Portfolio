/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F1117',
        secondary: '#161B27',
        card: '#1E2738',
        'text-base': '#E8EDF5',
        accent: '#5B8DEF',
        deep: '#1A2540',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(91, 141, 239, 0.18), 0 20px 60px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};