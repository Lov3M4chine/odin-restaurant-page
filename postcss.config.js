module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({
      url: 'rebase'
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ],
}
