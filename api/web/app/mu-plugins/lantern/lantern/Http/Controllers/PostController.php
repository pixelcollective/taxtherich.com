<?php

namespace Lantern\Http\Controllers;

use \Lantern\Repositories\PostRepositoryInterface;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\View;

class PostController extends BaseController
{
    public function __construct(PostRepositoryInterface $post)
    {
        $this->post = $post;
    }

    public function getAll()
    {
        return View::make('posts.index', [
            'posts' => $this->post->getAll()
        ]);
    }

    public function getAllPublished()
    {
        return View::make('posts.index', [
            'posts' => $this->post->getAllPublished()
        ]);
    }
}
