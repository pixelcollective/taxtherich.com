<?php

namespace Lantern\Providers;

use \Lantern\Repositories\PostRepository;
use \Lantern\Repositories\PostRepositoryInterface;
use \Illuminate\Support\ServiceProvider;

class PostServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(PostRepositoryInterface::class, PostRepository::class);
    }
}
