<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;
use \Lantern\WordPress\PostTypes;

class PostTypeServiceProvider extends ServiceProvider
{
    public function register()
    {
        new PostTypes\AppPostType();
    }
}
