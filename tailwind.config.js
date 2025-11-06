/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Use a CSS variable for duration with a fallback
        marquee: 'marquee var(--marquee-duration, 80s) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Animate to -50% for duplicated content
        },
      },
    },
  },
  plugins: [],
}