// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ],
  theme: {
    extend: {
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
