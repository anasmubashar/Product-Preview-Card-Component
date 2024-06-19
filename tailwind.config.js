/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        Dark_cyan: 'hsl(158, 36%, 37%)',
        Very_dark_cyan: 'hsl(158, 36%, 30%)',
        Cream: 'hsl(30, 38%, 92%)',
        Very_dark_blue: 'hsl(212, 21%, 14%)',
        Dark_grayish_blue: 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        Fraunces: ['Fraunces', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'responsive-heading': 'clamp(1.5rem, 2.5vw, 2rem)',
        'responsive-paragraph': 'clamp(0.8rem, 1.5vw, 0.9rem)',
        'responsive-price': 'clamp(1.25rem, 2.5vw, 1.875rem)',
      },
    },
  },
  plugins: [],
}

