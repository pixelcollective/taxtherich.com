<?php

require __DIR__ .'/vendor/autoload.php';

\WPEloquent\Core\Laravel::connect([
    'global' => true,
    'config' => [
        'database' => [
            'user'     => getenv('DB_USER'),
            'password' => getenv('DB_PASSWORD'),
            'name'     => getenv('DB_NAME'),
            'host'     => getenv('DB_HOST'),
        ],
        'prefix' => 'wp_',
    ],
    'events' => false,
    'log'    => true
]);