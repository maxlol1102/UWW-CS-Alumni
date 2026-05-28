/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'uww-purple': '#4B2580',
        'uww-purple-dark': '#3a1c65',
        'uww-purple-light': '#6b3daa',
        'uww-gold': '#FFC629',
        'uww-gold-dark': '#e6ad00',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
