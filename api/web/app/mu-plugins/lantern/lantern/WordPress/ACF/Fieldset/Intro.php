<?php

namespace Lantern\WordPress\ACF\Fieldset;

use \StoutLogic\AcfBuilder\FieldsBuilder;
use function \Lantern\WordPress\ACF\get_partial;

class Intro
{
    public function __construct()
    {
        $this->component = new FieldsBuilder('introduction');
    }

    public function standard()
    {
        $this->component->addFields(get_partial('intro'));

        return $this->component;
    }

    public function tabbed()
    {
        $this->component
            ->addTab('Introduction', ['placement' => 'left'])
                ->addFields(get_partial('intro'));

        return $this->component;
    }
}
