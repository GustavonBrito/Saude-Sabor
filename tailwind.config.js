/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ceteraBlack: ["Et Cetera Black W00 Regular", "sans-serif"],
      },
      backgroundColor: {
        blueSky: "#d9ebf5",
      },
      maxHeight:{
        firstSectionHeight : 'calc(100vh - 12rem)'
      }
    },
  },
  plugins: [import("flowbite/plugin")],
};
