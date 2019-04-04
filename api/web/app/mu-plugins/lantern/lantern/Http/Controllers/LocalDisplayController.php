<?php

namespace Lantern\Http\Controllers;

use \Laravel\Lumen\Routing\Controller;
use \Cz\Git\GitRepository;

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

        $this->writeToDisk('local')
             ->writeToDisk('spaces')
             ->commitToGit()
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
     * @param  string $disk identifies desired disk ('local', 'spaces', ...)
     * @return self
     */
    public function writeToDisk($disk)
    {
        $file_path = ($disk == 'local') ?? 'public/';
        app('storage')::disk($disk)->put(
            $file_path . $this->name .'.html',
            $this->view,
            'public'
        );

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

    /**
     * Commit to VCS
     */
    public function commitToGit()
    {
        $this->repository = new GitRepository(config()['lantern']['git_repo']);
        // print_r($this->repository); die();
        if ($this->repository->hasChanges()) {
            $this->repository->addAllChanges()
                             ->commit('Automated deployment')
                             ->push('origin master');
        }
    }
}
