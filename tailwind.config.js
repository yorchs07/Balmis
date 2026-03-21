/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f2a3d',
        secondary: '#1f4f6b',
        accent: '#3b82f6',
        darkbg: '#0b1720'
      }
    }
  },
  plugins: []
}
