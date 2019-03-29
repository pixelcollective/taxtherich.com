<?php

namespace TinyPixel\WPStasis;

class ConfigureServices
{
    public function configureBlade()
    {
        add_filter('bladerunner/cache/path', function () {
            return '/app/uploads/bladerunner';
        });

        add_filter('bladerunner/template/bladepath', function ($paths) {
            if (!is_array($paths)) :
                $paths = [$paths];
            endif;

            $paths[] = ABSPATH .'/resources/views';
            return $paths;
        });

        add_filter('bladerunner/controller/paths', function ($paths) {
            $paths[] = '../app/Http/Controllers';
            return $paths;
        });

        return $this;
    }
}
