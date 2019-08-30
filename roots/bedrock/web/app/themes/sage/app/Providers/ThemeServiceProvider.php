<?php

namespace App\Providers;

use App\Theme;
use App\Fields;
use Roots\Acorn\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('wordpress.customize', function ($app) {
            return (new Theme())();
        });

        $this->app->bind('wordpress.fields', function ($app) {
            return (new Fields())();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->make('wordpress.customize');

        $this->app->make('wordpress.fields');
    }
}
