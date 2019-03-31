const mix = require('laravel-mix')

const config = {
  browserSync: {
    proxy: 'http://api.taxtherich.valet',
    files: [
      './public/**/*.css',
      './public/**/*.js',
    ],
  }
}

mix.webpackConfig(config.webpack)

mix.js('resources/js/app.js', './public/app.js')
   .setPublicPath('./public')
   .browserSync(config.browserSync)
