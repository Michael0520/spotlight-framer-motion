/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "820px" },
      xs: { max: "640px" },
      xxs: { max: "370px" },
    },
    extend: {},
  },
  plugins: [],
};
