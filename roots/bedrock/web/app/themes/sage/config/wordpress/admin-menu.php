<?php

return [

    /*
    |----------------------------------------------------------------------
    | Admin Menu
    |----------------------------------------------------------------------
    |
    | Modify the WordPress admin menu
    |
    */

    'admin_menu' => [

        /*
        |----------------------------------------------------------------------
        | Enable WordPress Admin Menu
        |----------------------------------------------------------------------
        |
        | Set to false in order to remove the admin menu entirely.
        |
        */

        'enabled' => true,

        /*
        |----------------------------------------------------------------------
        | Menu Items
        |----------------------------------------------------------------------
        |
        | Disable admin menu items and/or their sub menu items.
        |
        | Each item in the array below expects three parameters dictating
        | the conditions under which a menu item will display, be hidden, or
        | rendered fully inaccessible.
        |
        | Each parameter is overridden by the ones preceeding it.
        |
        |   Parameter one:   string, matching one of the following options:
        |
        |       - 'display': default behavior
        |       - 'hidden':  visually non-apparent but still accessible
        |       - 'removed': inaccessible (HTTP response 403)
        |       - '':        defer authority to following parameters
        |
        |   Parameter two:   an array of environments that this item should be enabled on
        |   Parameter three: an array of capabilities that should have access
        |
        |   Example usage:
        |     * Shows `Dashboard` menu on development and staging
        |     * Only shows `Updates` submenu to users with `develop` capability
        |
        |    'dashboard' => [
        |       'enabled'        => ['', ['development', 'staging'], []],
        |       'sub_menu_items' => [
        |           'home'       => ['display', [], []],
        |           'updates'    => ['', [], ['develop']],
        |       ],
        |    ],
        |
        */

        'menu_items' => [

            /*
            |-------------------------------------------------------------------
            | Dashboard
            |-------------------------------------------------------------------
            |
            */

            'dashboard' => [
                'enabled' => ['removed', [], []],
                'sub_menu_items' => [
                    'home'    => ['display', [], []],
                    'updates' => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Posts
            |-------------------------------------------------------------------
            |
            */

            'posts' => [
                'enabled' => ['hidden', [], []],
                'sub_menu_items' => [
                    'all'        => ['display', [], []],
                    'new'        => ['display', [], []],
                    'categories' => ['display', [], []],
                    'tags'       => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Media
            |-------------------------------------------------------------------
            |
            */

            'media' => [
                'enabled' => ['display', [], []],
                'sub_menu_items' => [
                    'library' => ['display', [], []],
                    'new'     => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Pages
            |-------------------------------------------------------------------
            |
            */

            'comments' => [
                'enabled' => ['removed', [], []],
                'sub_menu_items' => [
                    'all' => ['display', [], []],
                    'new' => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Pages
            |-------------------------------------------------------------------
            |
            */

            'pages' => [
                'enabled' => ['removed', [], []],
                'sub_menu_items' => [
                    'all' => ['display', [], []],
                    'new' => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Appearance
            |-------------------------------------------------------------------
            |
            */

            'appearance' => [
                'enabled' => ['removed', [], []],
                'sub_menu_items' => [
                    'themes'    => ['display', [], []],
                    'customize' => ['display', [], []],
                    'widgets'   => ['display', [], []],
                    'menus'     => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Plugins
            |-------------------------------------------------------------------
            |
            */

            'plugins' => [
                'enabled' => ['removed', [], []],
                'sub_menu_items' => [
                    'installed' => ['display', [], []],
                    'add'       => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Users
            |-------------------------------------------------------------------
            |
            */

            'users' => [
                'enabled' => ['display', [], []],
                'sub_menu_items' => [
                    'all'     => ['display', [], []],
                    'new'     => ['display', [], []],
                    'profile' => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Tools
            |-------------------------------------------------------------------
            |
            */

            'tools' => [
                'enabled' => ['removed', [], []],
                'sub_menu_items' => [
                    'available'   => ['display', [], []],
                    'import'      => ['display', [], []],
                    'export'      => ['display', [], []],
                    'site_health' => ['display', [], []],
                    'export_data' => ['display', [], []],
                    'erase_data'  => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Settings
            |-------------------------------------------------------------------
            |
            */

            'settings' => [
                'enabled' => ['display', [], []],
                'sub_menu_items' => [
                    'general'    => ['display', [], []],
                    'writing'    => ['display', [], []],
                    'reading'    => ['display', [], []],
                    'media'      => ['display', [], []],
                    'permalinks' => ['display', [], []],
                    'privacy'    => ['display', [], []],
                ],
            ],

            /*
            |-------------------------------------------------------------------
            | Gutenberg
            |-------------------------------------------------------------------
            |
            */

            'gutenberg' => [
                'enabled' => ['removed', [], []],
                'sub_menu_items' => [
                    'gutenberg'     => ['display', [], []],
                    'widgets'       => ['display', [], []],
                    'support'       => ['display', [], []],
                    'documentation' => ['display', [], []],
                ],
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | WordPress Admin Bar
    |--------------------------------------------------------------------------
    |
    | Modify the WordPress administration bar
    |
    */

    'admin_bar' => [

        'enabled' => true,

        /*
        |----------------------------------------------------------------------
        | Admin Bar Items
        |----------------------------------------------------------------------
        |
        | Enable admin bar menu items
        |
        */

        'menu_items' => [
            'wp-logo'     => false,
            'site-name'   => false,
            'new-content' => false,
            'my-account'  => true,
            'updates'     => false,
            'search'      => false,
            'customize'   => false,
            'comments'    => false,
            'archive'     => false,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Options Pages
    |--------------------------------------------------------------------------
    |
    | Define additional options pages for the WordPress admin menu.
    |
    | The final parameter (view callback) should be a reference to a Blade view in your application.
    |
    | @link https://codex.wordpress.org/Function_Reference/add_options_page
    |
    */

    /*
    'options_pages' => [
        [
            'Settings',               // page title
            'Settings',               // menu title
            'manage_options',         // capability
            'plugin-settings.php',    // menu slug
            'Support::admin.options', // view callback
        ],
    ],
    */

];
