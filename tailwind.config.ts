import type { Config } from "tailwindcss";

const config: Config = {
  content:[
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0A0A0A",
          dark: "#1A1A1A",
          gold: "#D4AF37",
          goldLight: "#F3E5AB",
          goldDark: "#AA8C2C"
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #AA8C2C, #D4AF37, #F3E5AB, #D4AF37)',
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins:[],
};
export default config;