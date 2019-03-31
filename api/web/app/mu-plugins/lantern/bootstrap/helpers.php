<?php

/*
|--------------------------------------------------------------------------
| Overload Lumen
|--------------------------------------------------------------------------
|
| Modify some Lumen defaults to make operable with Bedrock and WordPress
|
*/

if (! function_exists('storage_path')) {
    /**
     * Get the path to the storage folder.
     *
     * @param  string  $path
     * @return string
     */
    function storage_path($path = '')
    {
        if (!file_exists(__DIR__ .'/../../../uploads/lantern')) {
            mkdir(__DIR__ .'/../../../uploads/lantern');
        }

        return app()->storagePath('/../../../uploads/lantern');
    }
}
