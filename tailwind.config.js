// tailwind.config.js
module.exports = {
  darkMode: "class", // Use 'class' strategy for dark mode
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Path to your JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#121212", // Dark background color
        darkText: "#e5e5e5", // Light text color
        primary: "#1D4ED8", // Blue color for links and buttons
        secondary: "#F59E0B", // Yellow for highlights or accents
      },
    },
  },
  plugins: [],
};
