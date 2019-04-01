<?php

namespace Lantern\Http\Controllers\API;

use \Lantern\Models\Post\Meta;
use \Illuminate\Support\Facades\Storage;
use \Laravel\Lumen\Routing\Controller as BaseController;

class APIController extends BaseController
{
    public function __construct()
    {
        $this->meta = new Meta();
    }

    public function show($id)
    {
        $data = $this->meta::all()
                            ->where('post_id', $id)
                            ->toArray();

        foreach ($data as $record) {
            $record = array_only($record, ['meta_key', 'meta_value']);
            $record['meta_key'] = ltrim($record['meta_key'], '_');
            $res[$record['meta_key']] = $record['meta_value'];
        }

        Storage::disk('spaces')->put("app-$id.json", json_encode($res), 'public');

        return json_encode($res);
    }
}
