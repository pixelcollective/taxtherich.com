<?php

namespace Lantern\Http\Controllers;

use \Lantern\Models\Post;
use \Laravel\Lumen\Routing\Controller as BaseController;

class LinkPostTypeController extends BaseController
{
    public $postTypeData;
    public $postTypeDataJSON;
    public $postTypeDataArray;

    public function __construct()
    {
        $this->post = new Post();
    }

    public function handle($name)
    {
        $this->name = $name;

        if (!is_null($this->name)) {
            $this->collectPostData()
                 ->createPostDataArray()
                 ->createPostDataJSON()
                 ->storeTo('spaces')
                 ->serve();
        } else {
            $this->sendHome();
        }
    }

    public function collectPostData()
    {
        $this->postData = $this->post::with('meta')
                            ->where('post_name', $this->name)
                            ->published()
                            ->get()
                            ->pluck('meta')
                            ->flatten();

        return $this;
    }

    public function createPostDataArray()
    {
        foreach ($this->postData->toArray() as $record) {
            $record['meta_key'] = ltrim($record['meta_key'], '_');
            $this->postDataArray[$record['meta_key']] = $record['meta_value'];
        }

        return $this;
    }

    public function createPostDataJSON()
    {
        $this->postDataJSON = json_encode($this->postDataArray);

        return $this;
    }

    public function storeTo($disk)
    {
        app('storage')::disk($disk)->put(
            'link-'. $this->name .'.json',
            $this->postDataJSON,
            'public'
        );

        return $this;
    }

    public function serve()
    {
        print app('view')->make('apps.single', ['appData' => $this->postDataArray]);
    }

    public function sendHome()
    {
        app('view')->make('index');
    }
}
