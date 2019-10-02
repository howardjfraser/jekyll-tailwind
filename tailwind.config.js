const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "640px",
        lg: "768px",
        xl: "1024px"
      },
      fontFamily: {
        sans: ["adelle-sans", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: []
};
