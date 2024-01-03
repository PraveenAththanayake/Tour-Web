import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      green: {
        "50": "#f1fcf5",
        "100": "#dff9e8",
        "200": "#c1f1d2",
        "300": "#91e4b0",
        "400": "#5ace85",
        "500": "#33b464",
        "600": "#25944f",
        "700": "#1f703e",
        "800": "#1e5d37",
        "900": "#1b4c2e",
        "950": "#092a17",
      },
    },
    screens: {
      xxs: "375px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "1920px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
