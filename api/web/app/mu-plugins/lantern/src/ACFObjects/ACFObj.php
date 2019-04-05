<?php

namespace Lantern\ACfObjects;

class ACFObj
{
    public static function all($post_id = '')
    {
        if (!$post_id) {
            $post_id = get_the_id();
        }

        $newKey = "acfObjects_$post_id";
        $re = get_option($newKey, []);
        return json_decode($re);
    }

    public static function get($key = '', $post_id = '')
    {
        if (!$post_id) {
            $post_id = get_the_id();
        }

        if ($post_id === 'option') {
            $post_id = 'options';
        }

        $newKey = "acfObjects_$post_id";
        $re = get_option($newKey, []);
        $reArray = json_decode($re, true);

        if (! empty($reArray)) :
            if (isset($reArray[$key])) {
                return $reArray[$key];
            }
        endif;

        return [];
    }
}
