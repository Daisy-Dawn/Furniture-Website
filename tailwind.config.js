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
        cyan: '#A8C5DA',
        black: '#1C1C1C',
        white: '#FFFFFF',
        black40: '#FFFFFF66',
        darkBlue: '#070B1D',
        semiDarkBlue: '#1E2753',
        blue: '#1645BC',
        lighterBlue: '#1E5EFF',
        skyBlue: '#4F81FF',
      },
      spacing: {},
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        inter: ["Nunito Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
