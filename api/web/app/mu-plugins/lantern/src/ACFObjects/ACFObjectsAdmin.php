<?php

namespace Lantern\ACFObjects;

class ACFObjectsAdmin extends ACFObjects
{
    public function __construct()
    {
        add_action('acf/save_post', function ($post_id) {
            if (! function_exists('get_fields')) {
                return;
            }

            if (empty($_POST['acf'])) {
                return;
            }

            $re = get_fields($post_id);
            $this->setACFObjects($post_id, $re);
        }, 9999);
    }

    public function setACFObjects($post_id, $value)
    {
        $jsonValue = json_encode($value);
        $newKey = "acfObjects_$post_id";

        //acfObjects_options
        if ($this->existACFObjects($newKey)) {
            update_option($newKey, $jsonValue, 'no');
        } else {
            add_option($newKey, $jsonValue, '', 'no');
        }
    }
}
