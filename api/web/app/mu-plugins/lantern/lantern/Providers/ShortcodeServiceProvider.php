<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;

use \Lantern\WordPress\Shortcodes\IconFontShortcode;

class ShortcodeServiceProvider extends ServiceProvider
{
    public function register()
    {
        IconFontShortcode::register('glyphicon');
        IconFontShortcode::register('fontawesome');
    }
}
