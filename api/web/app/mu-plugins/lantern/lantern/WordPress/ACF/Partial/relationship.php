<?php

namespace Lantern\WordPress\ACF\partial;

use \Stoutlogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('background_component');

$configuration = [
    'label'     => 'Relevant Links',
    'post_type' => ['link'],
    'filters'   => [0 => 'search']
];

$builder
    ->addRelationship('related_links', $configuration)
        ->setInstructions('Add links to relevant pieces. You can add additional links using the "Links" content type in the sidebar.');

return $builder;
