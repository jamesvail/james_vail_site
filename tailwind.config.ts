import type { Config } from "tailwindcss";

const config: Config = {    
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
  theme: {
    extend: {       
      colors: {
        primary: "#1E293B",  // Dark blue-gray
        accent: "#3B82F6",   // Bright blue
        text: "#F3F4F6",     // Light gray
        secondary: "#94A3B8",
        background: "#0F172A",
      },
    },
  },
  plugins: [],
};

export default config;
