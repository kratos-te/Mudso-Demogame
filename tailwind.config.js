/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dodgerBlue: '#1864ab',
        greyBack: '#ced4da',
        greyBackTrans: '#ced4dab3',
        normalColor: '#495057'  
      },
      transitionDuration: {
        '2000': '2000ms',
        '60000': '60000ms'
      },
      screens: {
        'custom-sm': { 'max': '280px'}
      }
    }
  },
  plugins: [],
}
