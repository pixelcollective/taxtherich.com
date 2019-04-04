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
    'deploy_dir' => env('APP_URL') .'/app/uploads/lantern/public/',
    'cdn_base'   => env('CDN_BASE')
];
