<?php

namespace Lantern\Http\Controllers;

use \Laravel\Lumen\Routing\Controller;

class LocalDisplayController extends Controller
{
    private $post;

    public function __construct(\Lantern\Models\Post $post)
    {
        $this->post = $post;
    }

    /**
     * writeToDiskAndServeHTTP
     *
     * Writes view data to local and cloud storage disks
     * and then returns the view data as an HTTP response
     *
     * @param  string $slug
     * @return void
     */
    public function writeToDisksAndServeHTTP($name = null)
    {
        if (!isset($name)) {
            $name = config()['lantern']['routes']['fallback'];
        }

        $this->view = app('view')->make('index', [
            'app' => (object) $this->retrieveViewData($this->name = $name)
        ]);

        $this->writeToLocalDisk()
             ->replaceBaseURL()
             ->writeToCloudDisk('spaces')
             ->serveResponse();
    }

    /**
     * retrieveViewData
     *
     * Eloquently queries Post Model (with Post Meta relationship)
     *
     * @param  string $name matches against `wp_post_meta`.`post_name`
     * @return object \Lantern\Models|Post collection
     */
    public function retrieveViewData($name)
    {
        $data = $this->post::with('meta')
                    ->where('post_name', $name)
                    ->published()
                    ->get()
                    ->pluck('meta')
                    ->flatten();

        return $this->formatResponseData($data);
    }

    public function formatResponseData($data)
    {
        foreach ($data->toArray() as $record) {
            $record['meta_key'] = ltrim($record['meta_key'], '_');
            $formattedData[$record['meta_key']] = $record['meta_value'];
        }

        return $formattedData;
    }

    /**
     * writeToDisk
     *
     * Writes response object to local and remote disks
     *
     * @return self
     */
    public function writeToLocalDisk()
    {
        app('storage')::disk('local')->put(
            '/public/'. $this->name .'.html',
            $this->view,
            'public'
        );

        return $this;
    }

        /**
     * writeToDisk
     *
     * Writes response object to local and remote disks
     *
     * @param  string $disk identifies desired disk ('local', 'spaces', ...)
     * @return self
     */
    public function writeToCloudDisk($disk)
    {
        app('storage')::disk($disk)->put(
            'css/app.css',
            file_get_contents(config()['app']['url'] .'/app/mu-plugins/lantern/public/css/app.css'),
            'public'
        );

        app('storage')::disk($disk)->put(
            'js/app.js',
            file_get_contents(config()['app']['url'] .'/app/mu-plugins/lantern/public/js/app.js'),
            'public'
        );

        app('storage')::disk($disk)->put(
            'images/tax-the-rich.png',
            file_get_contents(config()['app']['url'] .'/app/mu-plugins/lantern/public/images/tax-the-rich.png'),
            'public'
        );

        app('storage')::disk($disk)->put(
            $this->name .'.html',
            $this->cdn_view,
            'public'
        );

        return $this;
    }

    public function replaceBaseURL()
    {
        $this->cdn_view = str_replace('/app/uploads/lantern/public/', '/', $this->view);

        return $this;
    }

    /**
     * serveHTTP
     *
     * Prints view data for direct HTTP response
     *
     * @return string $this->app_view output from app('view')
     */
    public function serveResponse()
    {
        echo $this->view;
    }
}
