/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B0D12",
          light: "#111520",
          accent: "#FF6A00"
        }
      },
      boxShadow: {
        card: "0 12px 40px rgba(0,0,0,.25)"
      }
    }
  },
  plugins: []
};
