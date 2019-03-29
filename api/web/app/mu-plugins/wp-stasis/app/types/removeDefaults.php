<?php

namespace TinyPixel\WpStasis;

use function \Sober\Intervention\intervention;

if (function_exists('\Sober\Intervention\intervention')) {
    /**
     * Toolbar
     */
    intervention('remove-toolbar-items');
    intervention('remove-howdy', 'You\'re absolutely beautiful!');

    /**
     * Admin Menu
     */
    intervention('remove-menu-items', 'posts', 'all');
    intervention('remove-menu-items', 'pages', 'all');
    intervention('remove-menu-items', 'comments', 'all');
    intervention('remove-menu-items', 'themes', 'all');
    intervention('remove-menu-items', 'tools', 'all');
    intervention('remove-menu-items', 'settings', 'all');

    /**
     * Dashboard Redirect
     */
    intervention('add-dashboard-redirect', 'admin.php?page=publish-site');

    /**
     * Update Notices
     */
    intervention('remove-update-notices', 'all');

    /**
     * Dashboard
     */
    intervention('update-dashboard-columns', 0);

    /**
     * Widgets
     */
    intervention('remove-widgets');

    /**
     * Footer
     */
    intervention('update-label-footer', 'Hey, thanks for building with <a href="https://tinypixel.dev">Tiny Pixel Tools</a>');

    /**
     * Help Tabs
     */
    intervention('remove-help-tabs');

    /**
     * Remove Emoji
     */
    intervention('remove-emoji');

    /** Remove
     * Dashboard Items
     */
    intervention('remove-dashboard-items');
}
