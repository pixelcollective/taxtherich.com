<?php

namespace Lantern\Http\Controllers;

use \Lantern\Models\Post;
use \Laravel\Lumen\Routing\Controller as BaseController;

class AppPostTypeController extends BaseController
{
    public $appData;
    public $appDataJSON;
    public $appDataArray;

    public function __construct()
    {
        $this->post = new Post();
    }

    public function handle($name)
    {
        $this->appName = $name;

        if (($this->appName=='')) {
            $this->collectAppData()
                 ->createAppDataArray()
                 ->createAppDataJSON()
                 ->storeTo('spaces')
                 ->serve();
        } else {
            $this->sendHome();
        }
    }

    public function collectAppData()
    {
        $this->appData = $this->post::with('meta')
                            ->where('post_name', $this->appName)
                            ->published()
                            ->get()
                            ->pluck('meta')
                            ->flatten();

        return $this;
    }

    public function createAppDataArray()
    {
        foreach ($this->appData->toArray() as $record) {
            $record['meta_key'] = ltrim($record['meta_key'], '_');
            $this->appDataArray[$record['meta_key']] = $record['meta_value'];
        }

        return $this;
    }

    public function createAppDataJSON()
    {
        $this->appDataJSON = json_encode($this->appDataArray);

        return $this;
    }

    public function storeTo($disk)
    {
        app('storage')::disk($disk)->put(
            'app-'. $this->appName .'.json',
            $this->appDataJSON,
            'public'
        );

        return $this;
    }

    public function serve()
    {
        print app('view')->make('apps.single', ['appData' => $this->appDataArray]);
    }

    public function sendHome()
    {
        app('view')->make('index');
    }
}
