/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: {
        50: "#fff7ec",
        100: "#ffedd3",
        200: "#ffd8a5",
        300: "#ffbb6d",
        400: "#ff9232",
        500: "#ff730a",
        600: "#ff5900",
        700: "#cc3e02",
        800: "#a1310b",
        900: "#822b0c",
        950: "#461204",
      },
      blue: {
        50: "#e8f1ff",
        100: "#d5e4ff",
        200: "#b3ccff",
        300: "#85a8ff",
        400: "#5676ff",
        500: "#2f45ff",
        600: "#0c0eff",
        700: "#0000fe",
        800: "#0609cd",
        900: "#10169f",
        950: "#0a0b5c",
      },
      yellow: {
        50: "#FFFCE5",
        100: "#FFF8CC",
        200: "#FFF199",
        300: "#FFEB66",
        400: "#FFE433",
        500: "#FFDF00",
        600: "#CCB100",
        700: "#998500",
        800: "#665800",
        900: "#332C00",
        950: "#191600",
      },
      gray: {
        50: "#f6f7f9",
        100: "#edeef1",
        200: "#d6d9e1",
        300: "#b2b9c7",
        400: "#8893a8",
        500: "#69758e",
        600: "#545e75",
        700: "#454d5f",
        800: "#393f4d",
        900: "#353945",
        950: "#23262e",
      },
      neutral: {
        50: "#f7f7f7",
        100: "#ededed",
        200: "#d4d4d4",
        300: "#c8c8c8",
        400: "#adadad",
        500: "#999999",
        600: "#888888",
        700: "#7b7b7b",
        800: "#676767",
        900: "#545454",
        950: "#363636",
      },
    },
    spacing: {
      xxxxs: "2px",
      xxxs: "4px",
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      md: "48px",
      ml: "56px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "144px",
      "6xl": "160px",
      "7xl": "176px",
      "8xl": "192px",
      "9xl": "208px",
      "10xl": "224px",
      "11xl": "320px",
      "12xl": "360px",
      "13xl": "424px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      display: ["Titillium Web", "sans-serif"],
    },
    fontSize: {
      konsultativ: ["0.688rem", { lineHeight: "1.0rem" }],
      body: ["0.813rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      small: ["1.5rem", { lineHeight: "2.25rem" }],
      medium: ["2rem", { lineHeight: "3rem" }],
      large: ["2.5rem", { lineHeight: "3.75rem" }],
      xlarge: ["3rem", { lineHeight: "4.5rem" }],
      "display-desktop": ["4.5rem", { lineHeight: "5.5rem" }], // 72px
      "display-mobile": ["2.8125rem", { lineHeight: "3.5rem" }], // 45px
      "h1-desktop": ["3rem", { lineHeight: "3.75rem" }], // 48px
      "h1-mobile": ["2.5rem", { lineHeight: "3.125rem" }], // 40px
      "h2-desktop": ["2.5rem", { lineHeight: "3.125rem" }], // 40px
      "h2-mobile": ["2rem", { lineHeight: "2.5rem" }], // 32px
      "h3-desktop": ["2rem", { lineHeight: "2.5rem" }], // 32px
      "h3-mobile": ["1.5rem", { lineHeight: "2.25rem" }], // 24px
      "h4-desktop": ["1.5rem", { lineHeight: "2.25rem" }], // 24px
      "h4-mobile": ["1.125rem", { lineHeight: "1.875rem" }], // 18px
      "p-desktop": ["1.125rem", { lineHeight: "1.875rem" }], // 18px
      "p-mobile": ["1rem", { lineHeight: "1.5rem" }], // 16px
      "a-desktop": ["1.125rem", { lineHeight: "1.875rem" }], // 18px
      "a-mobile": ["1rem", { lineHeight: "1.5rem" }], // 16px
    },
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    borderRadius: {
      DEFAULT: "1.25rem",
      none: "0px",
      s: "5px",
      sm: "10px",
      md: "30px",
      lg: "40px",
      full: "9999px",
    },
    boxShadow: {
      drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)",
      drop50: "4px 4px 4px 0 rgb(0 0 0 / 0.50)",
      inner25: "0 4px 4px 0 rgb(0 0 0 / 0.25) inset",
      inner50: "0 4px 4px 0 rgb(0 0 0 / 0.50) inset",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
