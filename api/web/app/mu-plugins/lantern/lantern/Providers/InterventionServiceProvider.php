<?php

namespace Lantern\Providers;

use \Illuminate\Support\ServiceProvider;
use function \Sober\Intervention\intervention;

class InterventionServiceProvider extends ServiceProvider
{
    public $header = 'Tax The Rich';
    public $content = 'Live site: https://taxtherich.com';

    public function register()
    {
        add_action('plugins_loaded', function () {
            if (function_exists('\Sober\Intervention\intervention')) {
                /** Toolbar */
                intervention('remove-toolbar-items');
                intervention('remove-howdy', 'You\'re absolutely beautiful!');
                intervention('add-dashboard-item', [$this->header, $this->content]);
                /** Admin Menu */
                intervention('remove-menu-items', [
                    'posts',
                    'pages',
                    'themes',
                    'tools',
                    'settings',
                    'plugins',
                    'dashboard',
                    'comments',
                ], ['editor', 'administrator', 'author', 'contributor']);

                /** Update Notices */
                intervention('remove-update-notices', 'all');

                /** Dashboard Columns */
                intervention('update-dashboard-columns', 1);

                /** Remove User Roles */
                intervention('remove-user-roles', ['subscriber', 'contributor']);

                /** Widgets */
                intervention('remove-widgets');

                /** Footer */
                intervention(
                    'update-label-footer',
                    'Hey, thanks for building with <a href="https://tinypixel.dev">Tiny Pixel Tools</a>'
                );

                /** Help Tabs */
                intervention('remove-help-tabs');

                /** Remove Emoji */
                intervention('remove-emoji');

                /** Remove Dashboard Items */
                intervention('remove-dashboard-items');
            }
        });
    }
}
