<?php

/**
 * Plugin Name: WP Stasis
 * Plugin URI: https://github.com/kellymears/wp-json-adapter
 * Description: WP Data in cloud-hosted JSON
 * Version: 1.0.0
 * Author: Kelly Mears
 * Author URI: https://tinypixel.dev
 * License: MIT
 */

namespace TinyPixel\WPStasis;

use \TinyPixel\WPStasis\WPStasis;
use \TinyPixel\WPStasis\ConfigureServices;

require 'vendor/autoload.php';

add_action('init', function () {
    require 'app/fields/builder.php';
});

/**
 * Init intervention
 */
add_action('init', function () {
    require 'app/types/removeDefaults.php';
});

/**
 * Initialize Silk CPT Builder
 */
add_action('init', function () {
    require 'app/types/apps.php';
});

/**
 * Configure Blade
 */
add_action('admin_init', function () {
    (new ConfigureServices())->configureBlade();
});

/**
 * Hide ACF
 */
add_filter('acf/settings/show_admin', '__return_false');

add_action('admin_menu', function () {
    add_menu_page(
        'Publish Site',
        'WP Stasis',
        'manage_options',
        'publish-site',
        function () {
            (new WPStasis());
            print view('dashboard', ['react' => plugin_dir_url(__FILE__) .'dist/app.js']);
        }
    );

    add_submenu_page(
        'publish-site',
        'Publish Staging',
        'Publish Staging',
        'edit_others_posts',
        'publish-staging',
        function () {
            $headless = new WPStasis('staging');
            $headless->processData();
        },
        1
    );

    add_submenu_page(
        'publish-site',
        'Publish Production',
        'Publish Production',
        'edit_others_posts',
        'publish-production',
        function () {
            $headless = new WPStasis('production');
            $headless->processData();
        },
        2
    );
});
