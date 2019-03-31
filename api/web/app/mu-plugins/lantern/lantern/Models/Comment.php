<?php

namespace Lantern\Models;

use \Lantern\Traits\HasMeta;
use \Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasMeta;

    protected $table      = 'comments';
    protected $primaryKey = 'comment_ID';
    protected $fillable   = [];
    public $timestamps    = false;

    const CREATED_AT = 'comment_date';

    public function post()
    {
        return $this->belongsTo(\Lantern\Models\Post::class);
    }

    public function meta()
    {
        return $this->hasMany(\Lantern\Models\Comment\Meta::class, 'comment_id')
                    ->select(['comment_id', 'meta_key', 'meta_value']);
    }

    public function user()
    {
        return $this->hasOne(\Lantern\Models\User::class, 'ID', 'user_id');
    }
}
