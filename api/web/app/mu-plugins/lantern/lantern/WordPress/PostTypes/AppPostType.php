<?php

namespace Lantern\WordPress\PostTypes;

use \Silk\PostType\Builder;

class AppPostType
{
    private $unsupported = [
        'editor',
        'author',
        'category',
        'tags',
        'comments',
        'post-formats',
        'thumbnail',
        'excerpt',
        'trackback',
        'revisions',
        'page-attributes'
    ];

    public function __construct()
    {
        add_action('init', function () {
            $app = Builder::make('microsite');

            $app->open()
                ->oneIs('Microsite')
                ->manyAre('Microsites')
                ->set('menu_icon', 'dashicons-cloud')
                ->set('show_in_rest', true)
                ->register()
                ->removeSupportFor($this->unsupported);
        });
    }
}
