module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Barlow: ['Barlow', 'sans-serif'],
      BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
      Bellefair: ['Bellefair', 'serif'],
    },
    extend: {
      colors: {
        'primary-white': '#D0D6F9',
        'primary-black': '#0B0D17',
      },
    },
  },
  plugins: [],
}
