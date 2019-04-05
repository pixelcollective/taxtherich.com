<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;
use \Lantern\WordPress\ACF\Page;
use \Lantern\WordPress\ACF\Microsite;

use \Lantern\ACFObjects\ACFObj;
use \Lantern\ACFObjects\ACFObjectsAdmin;

class AdvancedCustomFieldsServiceProvider extends ServiceProvider
{
    /**
     * Register Advanced Custom Fields Service.
     *
     * @return void
     */
    public function register()
    {
        /**
         * Set ACF URI Path
         */
        add_filter('acf/settings/path', function ($path) {
                $this->path = wp_plugins_url('/../../vendor/advanced-custom-fields-pro/', __FILE__);
                return $path;
        });

        /**
         * Set ACF Directory
         */
        add_filter('acf/settings/dir', function ($dir) {
            $this->dir = __DIR__ .'/../../app/mu-plugins/lantern/vendor/advanced-custom-fields-pro/';
            return $dir;
        });

        /**
         * Filter: Hide ACF Menu
         */
        add_filter('acf/settings/show_admin', '__return_false');

        $this->app->bind('ACFObjectsAdmin', function ($app) {
            return new ACFObjectsAdmin();
        });

        $this->app->bind('ACFObj', function ($app) {
            return new ACFObj();
        });

        /**
         * Add Additional Fields
         */
        add_filter('acf/custom/fields', function () {
            return [
                'code',
                'encrypted-password',
                'flexible-layouts-manager',
                'move-related-posts',
                'move-wp-editor',
                'move-seo',
                'repeater-flexible-content-collapser',
                'role-selector',
                'sidebar-selector',
                'swatch',
                'table',
                'tooltip'
            ];
        });

        /**
         * Include: Bootstrap ACF
         */
        include_once __DIR__ .'/../../vendor/advanced-custom-fields-pro/acf.php';
        include_once __DIR__ .'/../../vendor/acf-fields/acf-fields.php';

        (new Page('page'))->compose();
        (new Microsite('microsite'))->compose();
    }

    public function boot()
    {
        app('ACFObjectsAdmin');
    }
}
