<?php

namespace TinyPixel\WPStasis;

use \Silk\PostType\Builder;

Builder::make('app')
        ->open()
        ->oneIs('App')
        ->manyAre('App')
        ->set('menu_icon', 'dashicons-cloud')
        ->set('show_in_rest', true)
        ->register()
        ->removeSupportFor([
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
        ]);
