<?php

namespace TinyPixel\WPStasis;

use function getenv;

class Plugin
{
    public $plugin = [];
    public $messages = [];

    public function __construct()
    {
        $this->plugin = (object) [
            'version' => '1.0.0',
            'name' => 'WP Stasis',
            'namespace' => 'tinypixel',
            'link' => 'https://github.com/pixelcollective/wp-stasis',
            'version_req' => (object) [
                'php' => '>7',
                'curl' => '>7.16.2',
            ],
            'filesystem' => (object) [
                'key'         => getenv('DO_KEY'),
                'secret'      => getenv('DO_SECRET'),
                'endpoint'    => getenv('DO_ENDPOINT'),
                'container'   => getenv('DO_CONTAINER'),
                'local_dir'   => getenv('STASIS_LOCAL_DIR'),
                'remote_dir' => getenv('STASIS_REMOTE_DIR')
            ],
        ];

        $this->messages = (object) [
            'error' => (object) [
                'php_version' =>
                    __($this->plugin->name .' requires PHP '. $this->plugin->version_req->php, $this->plugin->namespace),
                'curl_version' =>
                    __($this->plugin->name .' requires cURL '. $this->plugin->version_req->curl, $this->plugin->namespace),
                'openssl' =>
                    __($this->plugin->name .' requires cURL to be compiled with OpenSSL.', $this->plugin->namespace),
            ],
        ];
    }

    /**
     * validateCompatibility
     *
     * verify environment meets installation requirements
     *
     * @return void
     */
    public function validateCompatibility()
    {
        /**
         *
         */
        if (is_admin() && (!defined('DOING_AJAX') || !DOING_AJAX)) :
            /**
             * Check PHP >7.0
             */
            if (version_compare(PHP_VERSION, $this->plugin->required_php, '<')) {
                $this->error($this->messages->error->php_version);

            /**
             * Check cURL compiled
             */
            } elseif (!function_exists('curl_version') ||
                    !($curl = curl_version())        ||
                    empty($curl['version'])          ||
                    empty($curl['features'])         ||
                    version_compare($curl['version'], '7.16.2', '<')) {
                        $this->error($this->messages->error->curl_version);

            /**
             * Check cURL compiled with openssl
             */
            } elseif (!($curl['features'] & CURL_VERSION_SSL)) {
                $this->error($this->messages->error->openssl);
            }
        endif;
    }

    public function error($msg)
    {
        wp_die($msg);
    }
}
