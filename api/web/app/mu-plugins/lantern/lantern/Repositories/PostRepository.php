<?php

namespace Lantern\Repositories;

use \Lantern\Models\Post;
use \Lantern\Repositories\PostRepositoryInterface;

class PostRepository implements PostRepositoryInterface
{
    public function getAll()
    {
        return Post::all();
    }

    public function getAllPublished()
    {
        return Post::all()->where('post_status', 'publish');
    }
}
