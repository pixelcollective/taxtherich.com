<?php

namespace TinyPixel\WPStasis;

use \StoutLogic\AcfBuilder\FieldsBuilder;

$config = ['ui' => 1, 'wrapper' => ['width' => 100]];

return (new FieldsBuilder('settings'))

    ->addGroup('social_media')

        ->addLink('facebook', $config)
            ->setInstructions('Connect Facebook Page')

        ->addLink('twitter', $config)
            ->setInstructions('Connect Twitter Account')

        ->addLink('instagram', $config)
            ->setInstructions('Connect Instagram Account')

    ->endGroup();
