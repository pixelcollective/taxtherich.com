<?php

namespace Lantern\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\View;
use Lantern\Models\Post;

class IndexController extends BaseController
{
    public function show()
    {

        $posts = Post::with(['author','meta'])
                    ->published()
                    ->get();

        $data = (object) [
            'app' => (object) [
                'name' => 'Lantern!',
                'posts' => $posts,
            ],
        ];

        return View::make('index', ['app' => $data->app]);
    }
}
