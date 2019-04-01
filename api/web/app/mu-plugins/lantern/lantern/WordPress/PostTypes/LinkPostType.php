<?php

namespace Lantern\WordPress\PostTypes;

use \Silk\PostType\Builder;

class LinkPostType
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
        'page-attributes',
    ];

    public function __construct()
    {
        add_action('init', function () {
            $app = Builder::make('link');

            $app->open()
                ->oneIs('Link')
                ->manyAre('Links')
                ->set('menu_icon', 'dashicons-admin-links')
                ->set('show_in_rest', true)
                ->register()
                ->removeSupportFor($this->unsupported);
        });
    }
}
