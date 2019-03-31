<?php

namespace Lantern\Providers;

use \Niellles\LumenCommands\LumenCommandsServiceProvider;
use \Illuminate\Support\ServiceProvider;
use \Illuminate\Database\ConnectionResolverInterface;
use \Illuminate\Database\ConnectionResolver;

class ArtisanCommandsProvider extends ServiceProvider
{
    public function register()
    {
        if (env('APP_ENV') === 'local') {
            $this->app->bind(ConnectionResolverInterface::class, ConnectionResolver::class);
            $this->app->register(LumenCommandsServiceProvider::class);
        }
    }
}
