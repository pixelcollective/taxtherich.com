<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;

class AdminPageServiceProvider extends ServiceProvider
{
    public function register()
    {
        add_action('admin_menu', function () {
            add_menu_page(
                'Lantern',
                'Lantern',
                'manage_options',
                'lantern',
                ['\Lantern\Http\Controllers\AdminPageController', 'showPage'],
                'dashicons-admin-plugins',
                10
            );
        });
    }
}
