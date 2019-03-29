require('laravel-mix-stylelint')
require('laravel-mix-eslint')

const mix = require('laravel-mix')

mix.js('src/assets/js/entry.js', 'dist/')

mix.sass('src/assets/scss/main.scss', 'dist/')
  .options({
  postCss: [ require('postcss-css-variables')() ]
});

mix.copyDirectory(`src/images`, `dist/images`)
mix.copy('src/index.html', 'dist/index.html');

mix.browserSync({
  proxy: `http://127.0.0.1:8081/`,
  files: [
    'dist/main.css',
    'dist/entry.js',
  ],
})

mix.inProduction() ? (
  mix.version()
    .then(() => {
      const manifest = File.find('dist/mix-manifest.json')
      const json = JSON.parse(manifest.read())
      Object.keys(json).forEach(key => {
        const hashed = json[key]
        delete json[key]
        json[key.replace(/^\/+/g, '')] = hashed.replace(/^\/+/g, '')
      })
      manifest.write(JSON.stringify(json, null, 2))
    })
) : (
  mix.sourceMaps()
)
