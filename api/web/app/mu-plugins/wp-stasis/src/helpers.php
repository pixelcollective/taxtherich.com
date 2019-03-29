<?php

namespace TinyPixel\WPStasis;

/**
 * Simple function to pretty up our field partial includes.
 *
 * @param  mixed $partial
 * @return mixed
 */
function get_field_partial($partial)
{
    $partial = str_replace('.', '/', $partial);
    return include("../app/fields/{$partial}.php");
}

function view($view, $data = [])
{
    return \Bladerunner\Container::current('blade')->render($view, $data);
}

load_plugin_textdomain('tinypixel', false, dirname(plugin_basename(__FILE__)) . '/resources/lang');
