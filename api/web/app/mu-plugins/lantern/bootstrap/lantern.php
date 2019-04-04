<?php

require_once __DIR__.'/../vendor/autoload.php';

(new Laravel\Lumen\Bootstrap\LoadEnvironmentVariables(dirname(__DIR__)))->bootstrap();

/*
|--------------------------------------------------------------------------
| Create Lantern
|--------------------------------------------------------------------------
|
| Here we will load the environment and create the application instance
| that serves as the central piece of this framework. We'll use this
| application as an "IoC" container and router for this framework.
|
*/

$lantern = new Laravel\Lumen\Application(dirname(__DIR__));
$lantern->withFacades();
$lantern->withEloquent();

/*
|--------------------------------------------------------------------------
| Register Container Bindings
|--------------------------------------------------------------------------
|
| Now we will register a few bindings in the service container. We will
| register the exception handler and the console kernel. You may add
| your own bindings here if you like or you can make another file.
|
*/

$lantern->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    Lantern\Exceptions\Handler::class
);

$lantern->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    Lantern\Console\Kernel::class
);

/*
|--------------------------------------------------------------------------
| Config Service Provider
|--------------------------------------------------------------------------
|
| Collect configuration files from /config
|
*/
$lantern->register(Lantern\Providers\ConfigServiceProvider::class);
$lantern->register(Lantern\Providers\AppServiceProvider::class);

/*
|--------------------------------------------------------------------------
| Administrative
|--------------------------------------------------------------------------
|
| Admin Pages, Panels, Fields, Modifications
|
*/

// $lantern->register(Lantern\Providers\AdminPageServiceProvider::class);
$lantern->register(Lantern\Providers\CarbonFieldsServiceProvider::class);
$lantern->register(Lantern\Providers\InterventionServiceProvider::class);

/*
|--------------------------------------------------------------------------
| Content
|--------------------------------------------------------------------------
|
| WordPress Post Repository & Interface Bindings
|
*/

$lantern->register(Lantern\Providers\PostTypeServiceProvider::class);
$lantern->register(Lantern\Providers\PostServiceProvider::class);
$lantern->register(Lantern\Providers\WordPressAssetsServiceProvider::class);
$lantern->register(Lantern\Providers\ShortcodeServiceProvider::class);
$lantern->register(Unicodeveloper\Emoji\EmojiServiceProvider::class);

/*
|--------------------------------------------------------------------------
| Load The Application Routes
|--------------------------------------------------------------------------
|
| Next we will include the routes file so that they can all be added to
| the application. This will provide all of the URLs the application
| can respond to, as well as the controllers that may handle them.
|
*/

$router_config = (object) [
    'web' => [
        'namespace' => 'Lantern\Http\Controllers',
    ],
    'api' => [
        'prefix' => 'api',
        'namespace' => 'Lantern\Http\Controllers\API',
    ],
];

$lantern->router->group($router_config->web, function ($router) {
    require __DIR__.'/../routes/web.php';
});

$lantern->router->group($router_config->api, function ($router) {
    require __DIR__.'/../routes/api.php';
});

return $lantern;
