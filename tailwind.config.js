/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "row-styling-default": "#fff",
        gray: {
          "100": "#272833",
          "200": "#202224",
          "300": "rgba(32, 34, 36, 0.5)",
          "400": "rgba(39, 40, 51, 0.7)",
        },
        black: "#000",
        mediumspringgreen: "#49e89c",
        gold: "#ffca28",
        chocolate: "#ff9040",
        greenyellow: "#adef44",
        gainsboro: {
          "100": "#e7e7ed",
          "200": "#e8e8e8",
          "300": "#e0e0e0",
        },
        darkslategray: "#404040",
        whitesmoke: "#f5f5f5",
        lightgoldenrodyellow: "#eafecb",
        yellowgreen: "#c7ff6d",
        paleturquoise: "#c9fde4",
        aquamarine: "#6ffdb9",
        palegoldenrod: "#ffeead",
        khaki: "#ffe06a",
      },
      spacing: {},
      fontFamily: {
        "row-primary-text": "'Source Sans Pro'",
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "31xl": "50px",
        "21xl": "40px",
      },
    },
    fontSize: {
      smi: "0.813rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      base: "1rem",
      "11xl": "1.875rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "13xl": "2rem",
      sm: "0.875rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
