<?php

namespace TinyPixel\WPStasis;

use \StoutLogic\AcfBuilder\FieldsBuilder;

$options = ['placement' => 'left'];

return (new FieldsBuilder('partials_general'))

        ->addTab('advocacy', $options)
            ->addFields(include(__DIR__ .'/../components/hero.php'))

        ->addTab('context', $options)
            ->addFields(include(__DIR__ .'/../components/context.php'))

        ->addTab('details', $options)
            ->addFields(include(__DIR__ .'/../components/details.php'));
