/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pure: '#000000',
          deep: '#050505',
          red: '#E10600',
          neon: '#FF1A1A',
          white: '#FFFFFF',
          gray: '#A0A0A0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 75% 50%, rgba(225,6,0,0.12), transparent 45%)',
      }
    },
  },
  plugins: [],
}