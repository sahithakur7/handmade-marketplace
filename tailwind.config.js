module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F3",
        beige: "#F5E6D3",
        "soft-brown": "#D4A574",
        terracotta: "#C8704B",
        dark: "#2C2C2C",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
