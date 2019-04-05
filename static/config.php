<?php

return [
    'production' => true,
    'baseUrl' => 'https://static.taxtherich.com',
    'site' => [
        'title' => 'Tax The Rich',
        'subtitle' => 'Personal blog of John Doe.',
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
