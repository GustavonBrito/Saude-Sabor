/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ceteraBlack: ["Et Cetera Black W00 Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
