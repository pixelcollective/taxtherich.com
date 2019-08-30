module.exports = {
  devUrl: 'http://d919cd0a.ngrok.io',
  assets: {
    postCss: ['main'],
    react:   ['react-entry'],
  },
  tailwind: `./../../../../tailwind.config.js`,
  paths: {
    dist:    `./dist`,
    styles:  `${__dirname}/resources/assets/styles`,
    scripts: `${__dirname}/resources/assets/scripts`,
    images:  `${__dirname}/resources/assets/images`,
    svg:     `${__dirname}/resources/assets/svg`,
    fonts:   `${__dirname}/resources/assets/fonts`,
  },
  browserSync: {},
  build: `${__dirname}/resources/build`,
}
