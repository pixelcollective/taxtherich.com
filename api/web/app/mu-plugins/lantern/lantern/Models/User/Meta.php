<?php

namespace Lantern\Models\User;

use \Lantern\Models\User;

use \Illuminate\Database\Eloquent\Model;

class Meta extends Model
{
    protected $table   = 'usermeta';
    public $timestamps = false;
    protected $fillable = ['meta_key', 'meta_value'];
    protected $primaryKey = 'umeta_id';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
