<?php

namespace Lantern\WordPress\ACF\Fieldset;

use \StoutLogic\AcfBuilder\FieldsBuilder;
use function \Lantern\WordPress\ACF\get_partial;

class FlexibleContent
{
    public function __construct()
    {
        $this->fieldset = new FieldsBuilder('flexible_content');
    }

    public function standard()
    {
        $this->fieldset
            ->addFlexibleContent('components', ['button_label' => 'Add component'])
            ->addLayout(get_partial('background'));

        return $this->fieldset;
    }

    public function tabbed()
    {
        $this->fieldset
            ->addTab('Layout', ['placement' => 'left'])
                ->addFlexibleContent('components', [
                    'button_label' => 'Add component'])
                    ->addLayout(get_partial('background'));

        return $this->fieldset;
    }
}
