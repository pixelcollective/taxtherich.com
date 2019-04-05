let mix = require('laravel-mix');
let build = require('./tasks/build.js');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*'])
    ]
});

mix.js('source/_assets/js/app.js', 'js')
    .sourceMaps()
    .sass('source/_assets/sass/app.scss', 'css/app.css')
    .sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })
    .purgeCss({
        extensions: ['html', 'md', 'js', 'php', 'vue'],
        folders: ['source'],
        whitelist: ['can_embed', 'petition', 'action_info_user', 'international_link-wrap', 'country_drop_wrap', 'form-comments', 'input[name="commit"]' ],
        whitelistPatterns: [/language/, /hljs/, /elements/, /components/],
    })
    .copy('source/_assets/images/tax-the-rich.png', 'images/tax-the-rich.png')
    .version();
