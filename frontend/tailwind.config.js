/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        noteListBg: '#DFF5FF',
        hoverButton: '#67C6E3',
        activeButton: '#378CE7',
        delete: '#FF204E',
      },
    },
  },
  plugins: [],
};
