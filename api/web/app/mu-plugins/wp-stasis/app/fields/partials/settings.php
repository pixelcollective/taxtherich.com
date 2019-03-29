<?php

namespace TinyPixel\WPStasis;

use \StoutLogic\AcfBuilder\FieldsBuilder;

$options = ['placement' => 'left'];

return (new FieldsBuilder('partials_settings'))

        ->addTab('Social Media Accounts', $options)
            ->addFields(include(__DIR__ .'/../components/settings.php'));
