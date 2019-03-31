<?php

namespace Lantern\Models;

use \Lantern\Traits\HasMeta;
use \Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    use HasMeta;

    protected $table = 'terms';
    protected $primaryKey = 'term_id';

    public function meta()
    {
        return $this->hasMany(\Lantern\Models\Term\Meta::class, 'term_id')
                    ->select(['term_id', 'meta_key', 'meta_value']);
    }
}
