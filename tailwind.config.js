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
        blueSky: "#f5f5f1",
        blueOcean: "#5d5eb1",
        creamAdvise: "#f7eedd",
        footerColorFirstStep: "#faf9ff",
        footerColorSecondStep: "#3b3dae",
      },
      maxHeight: {
        firstSectionHeight: "calc(100vh - 12rem)",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
