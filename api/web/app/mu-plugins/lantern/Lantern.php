<?php

/**
 * Plugin Name: Lantern
 * Plugin URI: https://github.com/pixelcollective/lantern
 * Description: Lantern keeps the light on for yeh.
 * Version: 1.0.0
 * Author: Tiny Pixel
 * Author URI: https://tinypixel.dev/
 * Domain Path: /lang
 */

namespace Lantern;

use Lantern\Providers\WordPressAssetsServiceProvider as PluginAssets;

require __DIR__ .'/server.php';

add_action('admin_enqueue_scripts', function () {

    $my_css = ['name' => 'lantern-css', 'url' => 'app.css'];
    $my_js = ['name' => 'lantern-js', 'url' => 'admin.js', 'dependencies' => 'jquery'];

    $theme = new PluginAssets();

    $theme->addAdminCSS($my_css)
          ->addAdminJS($my_js)
          ->enqueueAdminAssets();
});
