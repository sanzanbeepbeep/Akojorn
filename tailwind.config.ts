import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif']
      },
      screens:{
        'xs': '320px'
      }
    },
  },
  plugins: [],
} satisfies Config;
