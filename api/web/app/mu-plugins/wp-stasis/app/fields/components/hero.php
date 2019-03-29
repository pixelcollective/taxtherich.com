<?php

namespace TinyPixel\WPStasis;

use \StoutLogic\AcfBuilder\FieldsBuilder;

$config = [
    'ui' => 1,
    'wrapper' => ['width' => 100],
];

return (new FieldsBuilder('components_hero'))

    ->addGroup('advocacy_form')

        ->addText('title', $config)
            ->setInstructions('App Title')

        ->addText('subtitle', $config)
            ->setInstructions('App Subtitle')

        ->addTextarea('disclaimer', $config)
            ->setInstructions('Displayed beneath the form in small type')

    ->endGroup();
