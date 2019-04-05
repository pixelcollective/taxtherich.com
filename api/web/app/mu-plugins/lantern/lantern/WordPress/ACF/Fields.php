<?php

namespace Lantern\WordPress\ACF;

use StoutLogic\AcfBuilder\FieldsBuilder;

class Fields
{
    public function __construct($type)
    {
        $this->type    = $type;
        $this->builder = new FieldsBuilder($type);
        $this->fields  = (object) $this->loadFields();
        $this->setLocation();
    }

    public function setLocation()
    {
        $this->builder->setLocation('post_type', '==', $this->type);
    }

    public function addFieldGroup()
    {
        add_action('acf/init', function () {
            acf_add_local_field_group($this->builder->build());
        });

        return $this;
    }
}

/**
 * Simple function to pretty up our field partial includes.
 *
 * @param  mixed $partial
 * @return mixed
 */
function get_partial($partial)
{
    $partial = str_replace('.', '/', $partial);
    return include(__DIR__ .'/Partial/'. $partial .'.php');
}
