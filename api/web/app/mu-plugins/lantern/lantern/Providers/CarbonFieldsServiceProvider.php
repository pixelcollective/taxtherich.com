<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;

use \Carbon_Fields\Carbon_Fields;
use \Lantern\WordPress\Containers\AppContainer;

class CarbonFieldsServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        add_action('carbon_fields_register_fields', function () {
            (new AppContainer());
        });

        add_action('after_setup_theme', function () {
            Carbon_Fields::boot();
        });
    }
}
