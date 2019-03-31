<?php

namespace Lantern\Models;

use \Lantern\Traits\HasMeta;
use \Lantern\Traits\HasRoles;

use \Lantern\Models\Post;
use \Lantern\Models\Comment;
use \Lantern\Models\User\Meta as UserMeta;

use \Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasMeta, HasRoles;

    protected $table      = 'users';
    protected $primaryKey = 'ID';
    public $timestamps    = false;

    const CREATED_AT = 'user_registered';

    public function posts()
    {
        return $this->hasMany(Post::class, 'post_author')
                    ->where('post_status', 'publish')
                    ->where('post_type', 'post');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'user_id');
    }


    public function meta()
    {
        return $this->hasMany(UserMeta::class, 'user_id')
                    ->select(['user_id', 'meta_key', 'meta_value']);
    }

}
