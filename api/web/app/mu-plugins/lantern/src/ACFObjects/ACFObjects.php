<?php

namespace Lantern\ACFObjects;

class ACFObjects
{
    public function existACFObjects($key)
    {
        $re = get_option($key, []);
        if (empty($re)) {
            return false;
        } else {
            return true;
        }
    }
}
