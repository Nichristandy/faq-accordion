/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-pattern": "url('/images/bg-pattern-mobile.svg')",
        "desktop-pattern": "url('../images/bg-pattern-desktop.svg')",
      },
      colors: {
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "soft-red": "hsl(14, 88%, 65%)",
      },
    },
  },
  plugins: [],
};
