<?php

namespace Lantern\Http\Controllers;

use \Illuminate\Support\Facades\View;

class AdminPageController extends BaseController
{
    public static function showPage()
    {
        $data = (object) [
            'app' => (object) [
                'name' => 'Lantern',
            ],
        ];

        print View::make('admin.options-lantern', ['app' => $data->app]);
    }
}
