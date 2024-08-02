import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '20%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUpSlow: {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '40%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.75s ease-out forwards',
        fadeInUpSlow: 'fadeInUpSlow 1s ease-out forwards',
      },
      colors: {
        'border-color': '#f7ece1',
      }
    },
  },
  plugins: [],
};
export default config;
