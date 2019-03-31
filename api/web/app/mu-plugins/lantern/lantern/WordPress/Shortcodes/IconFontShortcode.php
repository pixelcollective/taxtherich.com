<?php

namespace Lantern\WordPress\Shortcodes;

use \Silk\Support\Shortcode;

class IconFontShortcode extends Shortcode
{
    // phpcs:ignore
    protected function glyphicon_handler()
    {
        return $this->html('glyphicon');
    }

    // phpcs:ignore
    protected function fontawesome_handler()
    {
        return $this->html('fa');
    }

    protected function html($iconset)
    {
        $icon = $this->attributes()->first();

        return "<i class='$iconset $iconset-$icon'></i>";
    }
}
