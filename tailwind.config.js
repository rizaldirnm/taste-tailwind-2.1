module.exports = {
  purge: {
    mode: "layers",
    content: ["src/**/*.{js,jsx,ts,tsx}", "public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
