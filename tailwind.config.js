/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FFDAB9',
        lightYellow: '#FFFACD',
        pastelBlue: '#AEC6CF',
      },
      fontFamily: {
        sans: ['Kanit', 'Prompt', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
