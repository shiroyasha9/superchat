/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#18181b',
        lemon: '#faf33e',
        'lemon-dark': '#f2e600',
        purple: {
          1000: '#451B66'
        }
      }
    }
  },
  plugins: []
};
