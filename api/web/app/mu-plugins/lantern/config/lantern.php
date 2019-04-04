<?php

return [
    'public_url' => env('APP_URL') .'/public/',
    'wordpress' => [
        'version' => get_bloginfo('version'),
        'charset' => get_bloginfo('charset'),
        'admin_email' => get_bloginfo('admin_email')
    ],
    'routes' => [
        'fallback' => 'tax-the-rich',
    ],
];
