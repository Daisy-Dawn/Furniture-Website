
/** @type {import('tailwindcss').Config} */
export default {
  content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutBanner': "url('./src/assets/about/offerBanner.jpeg')",
        'aboutBanner2': "linear-gradient(94deg, rgba(34, 34, 34, 0.25) 19.46%, rgba(34, 34, 34, 0.10) 84.61%)"
      },
      colors: {
        brown: '#644321',
        lead: '#222222',
        bGrey: "#999999",
        lynx: "#F7F7F7",
        steam: "#DDDDDD",
        orange: '#FA2020',
        lightBrown: "#FF7131",
      },
      spacing: {},
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
