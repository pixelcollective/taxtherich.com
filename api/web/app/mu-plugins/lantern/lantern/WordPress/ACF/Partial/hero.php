<?php

namespace Lantern\WordPress\ACF\partial;

use \Stoutlogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('hero');

$builder
    ->addText('heading', ['label' => 'Heading'])
    ->addText('subheading', ['label' => 'Subheading'])
    ->addTextArea('disclaimer', ['label' => 'Disclaimer']);

return $builder;
