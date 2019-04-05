<?php

namespace Lantern\WordPress\ACF\Fieldset;

use \StoutLogic\AcfBuilder\FieldsBuilder;
use function \Lantern\WordPress\ACF\get_partial;

class General
{
    public function __construct()
    {
        $this->component = new FieldsBuilder('general');
    }

    public function standard()
    {
        $this->component->addFields(get_partial('background'));

        return $this->component;
    }

    public function tabbed()
    {
        $this->component
            ->addTab('Background', ['placement' => 'left'])
                ->addFields(get_partial('background'));

        return $this->component;
    }
}
