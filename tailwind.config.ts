import type { Config } from "tailwindcss";

const config: Config = {    
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {       
      colors: {
        primary: "#1E293B",  
        accent: "#3B82F6",   
        text: "#F3F4F6",     
        secondary: "#94A3B8",
        background: "#0F172A",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "glow": "glow 1.5s infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
