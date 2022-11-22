/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/chair.png')",
        
       }
      
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#38bdf8",

          secondary: "#22d3ee",

          accent: "#60a5fa",

          neutral: "#fb923c",

          "base-100": "#09090B",

          info: "#fef08a",

          success: "#4ade80",

          warning: "#c4b5fd",

          error: "#f472b6",
        },
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
    ],
  },
  plugins: [require("daisyui")],
};
