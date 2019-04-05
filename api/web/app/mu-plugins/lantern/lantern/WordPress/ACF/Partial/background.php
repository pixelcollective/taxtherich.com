<?php

namespace Lantern\WordPress\ACF\partial;

use \Stoutlogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('background_component');

$builder
    ->addImage('background_image_component')
    ->addTrueFalse('fixed')
        ->setInstructions('Check to add a parallax effect');

return $builder;
