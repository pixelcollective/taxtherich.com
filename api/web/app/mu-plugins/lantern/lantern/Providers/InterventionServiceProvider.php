<?php

namespace Lantern\Providers;

use Illuminate\Support\ServiceProvider;
use function Sober\Intervention\intervention;

class InterventionServiceProvider extends ServiceProvider
{
    /**
     * Employ \Sober\Intervention wp-admin cleanup services
     *
     * @return void
     */
    public function register()
    {
        add_action('plugins_loaded', function () {
            if (function_exists('\Sober\Intervention\intervention')) {
                /** Toolbar */
                intervention('remove-toolbar-items');
                intervention('remove-howdy', 'You\'re absolutely beautiful!');

                /** Admin Menu */
                intervention('remove-menu-items', 'posts', 'all');
                intervention('remove-menu-items', 'pages', 'all');
                intervention('remove-menu-items', 'comments', 'all');
                intervention('remove-menu-items', 'themes', 'all');
                intervention('remove-menu-items', 'tools', 'all');
                intervention('remove-menu-items', 'settings', 'all');
                intervention('remove-menu-items', 'plugins', 'all');
                intervention('remove-menu-items', 'dashboard', 'all');

                /** Update Notices */
                intervention('remove-update-notices', 'all');

                /** Dashboard Columns */
                intervention('update-dashboard-columns', 0);

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
