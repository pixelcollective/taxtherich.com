<?php

namespace TinyPixel\WPStasis;

use \StoutLogic\AcfBuilder\FieldsBuilder;

$config = [
    'ui' => 1,
    'wrapper' => ['width' => 100],
];

$config_flexible_column = [
    'button_label' => 'Add Column',
    'max' => 3
];

$config_column_layout = [
    'label' => 'Column',
    'display' => 'block',
    'wrapper' => ['width' => 33]
];

$config_column_heading = [
    'label' => 'Column Heading',
    'ui' => 1,
    'width' => 33
];

$config_column_body = [
    'label' => 'Column Body',
    'ui' => 1,
    'width' => 33
];

return (new FieldsBuilder('components_details'))

    ->addGroup('details')

        ->addText('heading', $config)
            ->setInstructions('Heading for the details section')

        ->addFlexibleContent('row', $config_flexible_column)
            ->setInstructions('List of items illustrating the section')
            ->addLayout('columns', $config_column_layout)
                ->addText('column_heading', $config_column_heading)
                ->addWysiwyg('column_body', $config_column_body)

    ->endGroup();
