<?php

namespace TinyPixel\WpStasis;

use \StoutLogic\AcfBuilder\FieldsBuilder;

$settings = (new FieldsBuilder('Settings'))
            ->setLocation('post_type', '==', 'app')
                ->addFields(include(__DIR__ .'/partials/settings.php'));

$builder = (new FieldsBuilder('Content'))
            ->setLocation('post_type', '==', 'app')
                ->addFields(include(__DIR__ .'/partials/content.php'));


add_action('acf/init', function () use ($builder, $settings) {
    acf_add_local_field_group($builder->build());
    acf_add_local_field_group($settings->build());
});
