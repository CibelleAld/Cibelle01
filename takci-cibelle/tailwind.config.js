/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   
  theme: {
    extend: {
       colors: {
        primaire: '#1e40af',   
        secondaire: '#f97316', 
    }
    },
  },
  plugins: [],
}

