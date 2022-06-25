module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
    },
    extend: {
      colors: {
        primary: "#44bd32",
        title: "#252525",
        paragraph: "#212529",
      },
      backgroundImage: {
        heroBg: "url('https://i.ibb.co/K6zts16/bg-wave-img.png')",
      },
    },
    container: {
      padding: "1rem",
      center: true,
    },
    fontFamily: {
      Rubik: "'Rubik', sans-serif",
    },
  },
  plugins: [],
};
