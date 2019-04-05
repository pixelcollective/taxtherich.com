<?php

namespace Lantern\WordPress\ACF\Fieldset;

use \StoutLogic\AcfBuilder\FieldsBuilder;
use function \Lantern\WordPress\ACF\get_partial;

class Microsite
{
    public function __construct()
    {
        $this->component = new FieldsBuilder('Microsite Content');
    }

    public function standard()
    {
        $this->component->addFields(get_partial('hero'))
                        ->addFields(get_partial('relationship'));

        return $this->component;
    }

    public function tabbed()
    {
        $this->component
            ->addTab('Hero', ['placement' => 'left'])
                ->addFields(get_partial('hero'))

            ->addTab('Introduction', ['placement' => 'left'])
                ->addFields(get_partial('intro'))

            ->addTab('Tax The Rich Act', ['placement' => 'left'])
                ->addFields(get_partial('tax-the-rich-act'))

            ->addTab('Related Links', ['placement' => 'left'])
                ->addFields(get_partial('relationship'));

        return $this->component;
    }
}
