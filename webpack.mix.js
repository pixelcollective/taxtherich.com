require('laravel-mix-stylelint')
require('laravel-mix-eslint')
let mix = require('laravel-mix')
let glob = require('glob-all')
let PurgecssPlugin = require('purgecss-webpack-plugin')
mix.pug = require('laravel-mix-pug')

const tailwindcss = require('tailwindcss')

const config = {
  postCSS: {
    processCssUrls: false,
    postCss: [
     tailwindcss('./src/tailwind.js')
    ]
  },
  browserSync: {
    proxy: 'http://taxtherich.valet',
    files: [
      './dist/*.html',
      './dist/**/*.css',
      './dist/**/*.js',
    ],
  },
}

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, 'src/*.pug'),
          path.join(__dirname, 'src/js/**/*.js')
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'pug'],
            whitelist: ['can_embed']
          }
        ]
      })
    ]
  })
}

mix.js('src/js/index.js', './dist/js/app.js')
   .sass('./src/scss/main.scss', './dist/css/app.css')
      .options(config.postCSS)
   .pug('src/index.pug', './../dist')
   .setPublicPath('./dist')
   .browserSync(config.browserSync)
