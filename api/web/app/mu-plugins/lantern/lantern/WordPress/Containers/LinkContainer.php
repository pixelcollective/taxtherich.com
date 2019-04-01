<?php

namespace Lantern\WordPress\Containers;

use \Carbon_Fields\Container;
use \Carbon_Fields\Field;

class LinkContainer
{
    public function __construct()
    {
        Container
            ::make('post_meta', __('Link Information', 'lantern'))
            ->where('post_type', '=', 'link')
            ->add_fields([
                Field::make('text', 'link_url', 'Link URL'),
                Field::make('rich_text', 'description', 'Description of link')
            ]);

        return $this;
    }
}
