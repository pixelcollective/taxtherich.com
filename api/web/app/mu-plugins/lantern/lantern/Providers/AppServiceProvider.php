<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Blade::directive('components', function ($expression) {
            $path = resource_path('views');
            return "<?php include($path .'components/'. $expression .'.blade.php');";
        });

        Blade::directive('public', function ($expression) {
            return "<?php echo config()['lantern']['assets_url'] . $expression; ?>";
        });

        Blade::directive('emoji', function ($expression) {
            return "<?php echo
                '<span role=\'img\' class=\'emoji\' aria-label='. $expression .'>'.
                    \Unicodeveloper\Emoji\Facades\Emoji::findByAlias($expression)
                .'</span>'; ?>";
        });

        include __DIR__ .'/../Directives/Directives.php';
    }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
