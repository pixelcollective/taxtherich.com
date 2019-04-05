<?php

namespace Lantern\WordPress\ACF;

use \Lantern\WordPress\ACF\Fields;
use \Lantern\WordPress\ACF\Fieldset;

class Microsite extends Fields
{
    public function loadFields()
    {
        return (object) [
            'microsite'    => new Fieldset\Microsite(),
        ];
    }

    public function compose()
    {
        $this->builder
             ->addFields($this->fields->microsite->tabbed());

        $this->addFieldGroup();
    }
}
