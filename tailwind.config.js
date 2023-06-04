module.exports = {
  content: ["./App.js", "./Components/**/*.js", "./Screens/**/*.js"],
  theme: {
    colors: {
      b: "#0D1321",
      lb: "#748CAB",
      db: "#1D2D44",
      bge: "#F0EBD8",
      bg: "#3E5C76",
    extend: {},
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
