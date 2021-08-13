// webpack.mix.js
let mix = require('laravel-mix');

// Configuration
mix
  .setPublicPath("dist")
  .disableNotifications()
  .options({
    processCssUrls: false,
  });

// JS
mix.js('src/js/index.js', 'js')
  .sass('src/scss/styles.scss', 'css');
