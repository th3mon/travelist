/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e48e0',
        'primary-lighter': '#4063e5',
        light: '#ededee',
        input: {
          text: '#1e2a48',
          bg: '#ededee',
          label: '#6293e4',
        },
        header: '#6293e4',
        bg: '#1e2a48',
      },
      fontFamily: {
        sans: ['Recursive', 'Helvetica', 'Arial', 'sans-serif'],
      },
      rotate: {
        10: '10deg',
      },
    },
  },
  plugins: [],
};
