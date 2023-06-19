/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'details' : ['"Chakra Petch"'],
        'card-header' : 'KARIXBY'
      },
      backgroundImage: {
        'pink-glow' : 'linear-gradient(89.83deg, #ebe0f0 -89.12%, #f9cee2 85.7%);'
      }
    },
  },
  plugins: [],
};
