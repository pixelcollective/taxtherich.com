require('laravel-mix-stylelint')
require('laravel-mix-eslint')
const mix = require('laravel-mix')
const glob = require('glob-all')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const tailwindcss = require('tailwindcss')

mix.pug = require('laravel-mix-pug')

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

mix.setPublicPath('./dist')
   .browserSync(config.browserSync)

/**
 * Custom PurgeCSS extractor for Tailwind that allows special characters in
 * class names.
 *
 * https://github.com/FullHuman/purgecss#extractor
 */
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

  mix.webpackConfig({
    plugins: [
      new CopyWebpackPlugin([{
        from: 'src/images/',
        to: 'images/',
      }]),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
            quality: '65-80'
        },
        plugins: [
          imageminMozjpeg({
            quality: 65,
            maxmemory: 1000 * 512
          })
        ]
      })
    ],
  })
}

mix
  .copy('src/images', './dist/images')
  .js('src/js/index.js', './dist/js/app.js')
  .pug('src/index.pug', './../dist')
  .sass('./src/scss/main.scss', './dist/css/app.css')
    .options(config.postCSS)
