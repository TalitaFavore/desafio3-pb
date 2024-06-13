module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      sand: "#FCF8F3",
      sand3: "#FFF3E3",
      sand4: "#FAF3EA",
      primary: "#B88E2F",
      secondary: "#F9F1E7",
      black: "#000000",
      black2: "#242424",
      gray: "#9F9F9F",
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}
}