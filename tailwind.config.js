const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ebddd1",
          secondary: "#1a1e0f"
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
