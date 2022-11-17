/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app.html", "./src/**/*.{svelte,ts}"],
  theme: {
    extend: {
      animation: {
        fade: "5s ease-in-out",
        fromLeft: "fromLeft 1s ease-in-out",
        fromRight: "fromRight 1s ease-in-out",
        fromTop: "fromTop 1s ease-in-out",
        fromBottom: "fromBottom 1s ease-in-out",
      },
      keyframes: {
        fromLeft: {
          "0%": { transform: "translateX(-320px)" },
          "100%": { transform: "translateX(0)" },
        },
        fromRight: {
          "0%": { transform: "translateX(320px)" },
          "100%": { transform: "translateX(0)" },
        },
        fromTop: {
          "0%": { transform: "translateY(-320px)" },
          "100%": { transform: "translateY(0)" },
        },
        fromBottom: {
          "0%": { transform: "translateY(320px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
    container: {
      center: true,
      screens: {
        xl: "1000px",
        fullHD: "1200px",
        "2K": "1400px",
        "4K": "3840px",
        "8K": "5120px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: {
        light: "#161B22",
        dark: "#0D1117",
      },
      logocolor: {
        light: "#FE8D17",
        dark: "#FF5503",
      },
      blue: {
        light: "#01D1FF",
        dark: "#0076F3",
      },
      gray: {
        light: "#55595A",
        dark: "#363E44",
      },
      transparent: "transparent",
      white: "#fff",
      red: "#ff0000",
    },
    screens: {
      mm: "320px",
      xs: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px",
      fullHD: "1920px",
      "2K": "2560px",
      "4K": "3840px",
      "8K": "5120px",
    },
  },
  plugins: [],
}
