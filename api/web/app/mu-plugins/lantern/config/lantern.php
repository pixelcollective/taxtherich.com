<?php

return [
    'wordpress' => [
        'version' => get_bloginfo('version'),
        'charset' => get_bloginfo('charset'),
        'admin_email' => get_bloginfo('admin_email')
    ],
    'routes' => [
        'fallback' => 'tax-the-rich',
    ],
    'assets_url' => env('ASSETS_URL') .'/app/uploads/lantern/public/',
    'git_repo'   => storage_path('app')
];
