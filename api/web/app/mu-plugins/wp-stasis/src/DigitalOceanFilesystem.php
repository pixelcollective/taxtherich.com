<?php

namespace TinyPixel\WPStasis;

use \Aws\S3\S3Client;
use \League\Flysystem\AwsS3v3\AwsS3Adapter;
use \League\Flysystem\Filesystem;

class DigitalOceanFilesystem
{
    public static function getInstance($config)
    {
        $client = S3Client::factory([
            'credentials' => [
                'key'    => $config['key'],
                'secret' => $config['secret'],
            ],
            'bucket' => 'do-spaces',
            'endpoint' => $config['endpoint'],
            'version' => 'latest',
            // region is ignored by Digital Ocean Spaces but AWS class is insistent
            'region' => 'us-east-1',
        ]);

        $connection = new AwsS3Adapter($client, $config['container']);
        $filesystem = new Filesystem($connection);

        return $filesystem;
    }
}
