/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1170px",
        padding: '2rem',
      },
      colors: {
        'lightBlue': '#1F2029',
        'primary': '#DEA83C'
      },
      fontFamily: {
        'cabin': ['Cabin, sans-serif'],
        'can': ['Cantarell, sans-serif'],
        'sans': ['"Open Sans", sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s linear infinite',
        'spin': 'spin 5s linear infinite',
      }
      
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
}

