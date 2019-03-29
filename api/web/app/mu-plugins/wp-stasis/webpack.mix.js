const mix = require('laravel-mix')

const config = {
  browserSync: {
    proxy: 'http://api.taxtherich.valet',
    files: [
      './dist/**/*.css',
      './dist/**/*.js',
    ],
  }
}

mix.webpackConfig(config.webpack)

mix.react('resources/scripts/app.js', './dist/app.js')
   .setPublicPath('./dist')
   .browserSync(config.browserSync)
