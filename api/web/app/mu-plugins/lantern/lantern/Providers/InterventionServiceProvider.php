<?php

namespace Lantern\Providers;

use \Illuminate\Support\ServiceProvider;
use function \Sober\Intervention\intervention;

class InterventionServiceProvider extends ServiceProvider
{
    public $header = 'Tax The Rich';
    public $content = 'Current Development Build: <a href="https://dist-dlnfbronfb.now.sh/">https://dist-dlnfbronfb.now.sh/</a>';

    public function register()
    {
    }
}
