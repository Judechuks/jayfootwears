/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"], // xs: ['12px', '16px'],
      sm: ["0.875rem", "1.25rem"], // sm: ['14px', '20px'],
      base: ["1rem", "1.21875rem"], // base: ['16px', '19.5px'],
      lg: ["1.125rem", "21.94px"], // lg: ['18px', '21.94px'],
      xl: ["1.25rem", "1.52375rem"], // xl: ['20px', '24.38px'],
      "2xl": ["1.5rem", "1.82875rem"], // '2xl': ['24px', '29.26px'],
      "3xl": ["1.75rem", "3.125rem"], // '3xl': ['28px', '50px'],
      "4xl": ["3rem", "3.625rem"], // '4xl': ['48px', '58px'],
      "8xl": ["6rem", "6.625rem"], // '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
        "custom-xl": "1200px",
        "x-sm": "580px",
        "xx-sm": "415px",
      },
    },
  },
  plugins: [],
};
