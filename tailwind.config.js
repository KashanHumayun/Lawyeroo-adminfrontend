/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This line should cover your AdminRegister.tsx file
    './public/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-gradient': 'linear-gradient(to bottom, #6a5acd, #7b68ee)',
        'header-gradient': 'linear-gradient(to right, #7b68ee, #6a5acd)',
      },
    },
  },
  plugins: [],
}
