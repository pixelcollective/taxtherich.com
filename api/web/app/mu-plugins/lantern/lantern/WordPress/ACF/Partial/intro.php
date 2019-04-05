<?php

namespace Lantern\WordPress\ACF\partial;

use \Stoutlogic\AcfBuilder\FieldsBuilder;

$field_config = [
    'list' => [
        'label' => 'Introduction List',
        'min' => 3,
        'max' => 3,
        'layout' => 'block',
    ],
];

$builder = new FieldsBuilder('hero');

$builder
    ->addText('intro_heading', ['label' => 'Heading'])
    ->addTextArea('intro_content', ['label' => 'Content'])
    ->addRepeater('intro_list', $field_config['list'])
        ->addText('intro_list_item', ['label' => 'List item'])
    ->endRepeater();


return $builder;
