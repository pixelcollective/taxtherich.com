<?php

namespace TinyPixel\WPStasis;

use \StoutLogic\AcfBuilder\FieldsBuilder;

$config = [
    'ui' => 1,
    'wrapper' => ['width' => 100],
];

$config_button = ['button_label' => 'Add List Item'];

$config_layout = [
    'label' => 'List Item',
    'display' => 'block'
];

$config_list = [
    'label' => 'List Item Text',
    'ui' => 1,
    'wrapper' => ['width' => 100]
];

return (new FieldsBuilder('context'))

    ->addGroup('context')

        ->addText('heading', $config)
            ->setInstructions('Heading for the context section')

        ->addWysiwyg('body', $config)
            ->setInstructions('Short paragraph following heading.')

        ->addFlexibleContent('list', $config_button)
            ->setInstructions('List of items concluding the context section')
            ->addLayout('list_items', $config_layout)
                ->addText('list_item', $config_list)

    ->endGroup();
