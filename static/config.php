<?php

return [
    'production' => false,
    'baseUrl' => 'https://taxtherich.com',
    'site' => [
        'title' => 'My Jigsaw Blog',
        'subtitle' => 'Personal blog of John Doe.',
        'disclaimer' => 'Yada yada yada.',
        'image' => 'default-share.png',
    ],
    'owner' => [
        'name' => 'John Doe',
        'twitter' => 'johndoe',
        'github' => 'johndoe',
    ],
    'services' => [
        'analytics' => 'UA-XXXXX-Y',
        'disqus' => 'artisanstatic',
        'cloudinary' => 'artisanstatic',
        'jumprock' => 'artisanstatic',
    ],
    'collections' => [
        'posts' => [
            'path' => '_posts/{filename}',
        ],
    ],
    'imageCdn' => function ($page, $path) {
        return "https://res.cloudinary.com/{$page->services->cloudinary}/{$path}";
    },
];
