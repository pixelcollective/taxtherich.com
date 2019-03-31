<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;

class WordPressAssetsServiceProvider extends ServiceProvider
{
    public $js = [];
    public $css = [];

    public function __construct()
    {
        return $this;
    }

    public function addAdminCSS($css)
    {
        $this->css[] = [
            'name' => $css['name'],
            'url' => $this->getPublicPath($css['url']),
        ];

        return $this;
    }

    public function addAdminJS($js)
    {
        $this->js[] = [
            'name' => $js['name'],
            'url' => $this->getPublicPath($js['url']),
            'dependencies' => $js['dependencies'],
        ];

        return $this;
    }

    public function getPublicPath($file)
    {
        return plugins_url('/../../public/'. $file, __FILE__);
    }

    public function enqueueAdminAssets()
    {
        if (is_admin()) {
            foreach ($this->js as $script) :
                wp_enqueue_script($script['name'], $script['url'], $script['dependencies']);
            endforeach;

            foreach ($this->css as $style) :
                wp_enqueue_style($style['name'], $style['url']);
            endforeach;
        }
    }
}
