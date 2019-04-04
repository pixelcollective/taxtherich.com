require('laravel-mix-stylelint')
require('laravel-mix-eslint')
const mix = require('laravel-mix')
const glob = require('glob-all')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const tailwindcss = require('tailwindcss')

const config = {
  postCSS: {
    processCssUrls: false,
    postCss: [
     tailwindcss('./resources/js/tailwind.js')
    ]
  },
  browserSync: {
    proxy: 'http://taxtherich.valet',
    files: [
      './public/*.html',
      './public/**/*.css',
      './public/**/*.js',
    ],
  },
  uploadsDir: './../../uploads/lantern/public/',
}

mix.setPublicPath(`${config.uploadsDir}`)
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
          path.join(__dirname, 'resources/views/*.php'),
          path.join(__dirname, 'resources/js/**/*.js')
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'php'],
            whitelist: ['can_embed']
          }
        ]
      })
    ]
  })

  mix.webpackConfig({
    plugins: [
      new CopyWebpackPlugin([{
        from: 'resources/images/',
        to: '../../../uploads/lantern/public/images/',
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

mix.js('resources/js/app.js', `${config.uploadsDir}/js/app.js`)

mix.sass('./resources/sass/main.scss', `${config.uploadsDir}/css/app.css`)
   .options(config.postCSS)
