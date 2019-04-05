<?php

namespace Lantern\WordPress\ACF;

use \Lantern\WordPress\ACF\Fields;
use \Lantern\WordPress\ACF\Fieldset;

class Page extends Fields
{
    public function loadFields()
    {
        return (object) [
            'general' => new Fieldset\General()
        ];
    }

    public function compose()
    {
        $this->builder->addFields($this->fields->general->tabbed());
        $this->addFieldGroup();
    }
}
