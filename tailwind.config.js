/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "3rem",
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#4294E3",
        secondary: "#0dcaf0",
        gay: "#6c757d",
        "gay-100": "#f8f9fa",
        "gay-200": "#e9ecef",
        "gay-300": "#dee2e6",
        "gay-400": "#ced4da",
        "gay-500": "#adb5bd",
        "gay-600": "#6c757d",
        "gay-700": "#495057",
        "gay-800": "#343a40",
        "gay-900": "#212529",
        info: "#0dcaf0",
        warning: "#dc3545",
        dark: "#2621347",
        "primary-soft": "#8fcef2",
      },
    },
  },
  plugins: [require("daisyui")],
};
