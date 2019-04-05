<?php

namespace Lantern\WordPress\ACF\partial;

use \Stoutlogic\AcfBuilder\FieldsBuilder;

$field_config = [
    'list' => [
        'label' => 'Columns',
        'max' => 3,
        'ui' => 1,
        'button_label' => 'Add column',
        'layout' => 'table'
    ],
];

$column = new FieldsBuilder('column');

$column
        ->addText('tax_the_rich_column_heading', ['label' => 'Column Heading', 'ui' => 1])
        ->addTextArea('tax_the_rich_column_content', ['label' => 'Column Content', 'ui' => 1]);


$builder = new FieldsBuilder('hero');

$builder
    ->addText('tax_the_rich_heading', ['label' => 'Heading'])
    ->addFlexibleContent('tax_the_rich_columns', $field_config['list'])
        ->addLayout($column);

return $builder;
