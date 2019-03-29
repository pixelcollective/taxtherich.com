<?php

namespace TinyPixel\WPStasis;

use \WPEloquent\Model\Post;
use \TinyPixel\WPStasis\SpacesService as Spaces;

class WPStasis
{
    public $target_env;
    public $dataset;
    public $posts;

    public function __construct($target_env = '')
    {
        $this->plugin = (new \TinyPixel\WPStasis\Plugin())->plugin;
        $this->files = [];
        $this->target_env = $target_env;
    }

    public function fetchApp()
    {
        return Post::with('meta')
                    ->type('app')
                    ->status('publish')
                    ->latest()
                    ->limit(1)
                    ->get()
                    ->toArray();
    }

    public function processData()
    {
        foreach ($this->fetchApp() as $data) :
            $target_filename = $this->target_env .'-'. str_replace(' ', '', $data['post_name']) .'.json';
            $file = (object)[
                'name' => $target_filename,
                'path' => (object)[
                    'local' => $this->plugin->filesystem->local_dir .'/'. $target_filename,
                    'remote' => $this->plugin->filesystem->remote_dir .'/'. $target_filename,
                ],
                'data' => [
                    'meta_key' => '',
                    'meta_value' => '',
                ],
            ];

            $file->data = $this->formatJSON($data);
            $this->writeToLocalFilesystem($file);
            $this->writeToRemoteFilesystem($file);
        endforeach;
    }

    public function formatJSON($data)
    {
        $results = [];
        foreach ($data['meta'] as $field) {
            $results[$field['meta_key']] = $field['meta_value'];
        }

        return $results;
    }

    public function writeToLocalFilesystem($file)
    {
        if (!file_exists($this->plugin->filesystem->local_dir)) {
            mkdir($this->plugin->filesystem->local_dir);
        }

        $record = fopen($file->path->local, 'w');
        fwrite($record, json_encode($file->data, JSON_UNESCAPED_SLASHES));
        fclose($record);
    }

    public function writeToRemoteFilesystem($file)
    {
        (new Spaces())->upload($file->path->local, $file->name);

        print view('admin.success', [
            'app_name' => $file->name,
            'remote_dir' => getenv('STASIS_REMOTE_DIR'),
        ]);
    }
}
