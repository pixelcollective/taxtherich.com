<?php

namespace TinyPixel\WPStasis;

use \TinyPixel\WPStasis\Plugin;
use \TinyPixel\WPStasis\DigitalOceanFilesystem;

class SpacesService
{
    private $filesystem;

    public function __construct()
    {
        $this->plugin = (new Plugin())->plugin;

        $this->filesystem = DigitalOceanFilesystem::getInstance([
            'key'        => $this->plugin->filesystem->key,
            'secret'     => $this->plugin->filesystem->secret,
            'endpoint'   => $this->plugin->filesystem->endpoint,
            'container'  => $this->plugin->filesystem->container
        ]);
    }

    public function upload($file, $filename)
    {
        $this->filesystem->put($this->plugin->filesystem->container . $filename, file_get_contents($file), [
            'visibility' => 'public'
        ]);
    }
}
