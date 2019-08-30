<?php
namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;
use Illuminate\Support\Collection;
use Carbon\Carbon;

/**
 * Theme customizer.
 *
 * @todo make less hackishly.
 */
class Theme
{
    /**
     * Invoke class
     *
     * @return void
     */
    public function __invoke()
    {
        $this->customPostTypes();

        $this->menuHooks();

        $this->profileHooks();

        $this->footerHooks();
    }

    public function customPostTypes()
    {
        add_action('init', function () {
            \register_extended_post_type('action', [
                'supports'  => ['title'],
                'menu_icon' => 'dashicons-megaphone',
                'show_in_graphql' => true,
                'hierarchical' => true,
                'graphql_single_name' => 'Action',
                'graphql_plural_name' => 'Actions',
            ]);
        });
    }

    public function profileHooks()
    {
        add_filter('option_show_avatars', '__return_false');

        add_filter('option_show_biography', '__return_false');

        add_filter('user_contactmethods', function ($contact) {
            return [];
        }, 10, 1);

        add_action('admin_head-profile.php', function () {
            ob_start([$this, 'removeBio']);
        });

        add_action('admin_footer-profile.php', function () {
            ob_end_flush();
        });

        add_action('admin_footer_text', function () {
            return null;
        });

        remove_action(
            'admin_color_scheme_picker',
            'admin_color_scheme_picker'
        );
    }

    public function removeBio($buffer)
    {
        $buffer = str_replace('<h3>About Yourself</h3>', '<h3>User Password</h3>', $buffer);
        $buffer = preg_replace('/<tr class=\"user-description-wrap\"[\s\S]*?<\/tr>/', '', $buffer, 1);
        $buffer = preg_replace('#<h2>Personal Options</h2>.+?/table>#s', '', $buffer, 1);

        return $buffer;
    }

    public function footerHooks()
    {
        add_filter('update_footer', function () {
            echo '&copy; Tiny Pixel Collective, LLC, ' . Carbon::now()->format('Y');
        }, 11);
    }

    public function menuHooks()
    {
        add_filter('acf/settings/show_admin', '__return_false');

        add_action('admin_bar_menu', function ($bar) {
            $bar->add_node([
                'id'    => 'supportlink',
                'title' => 'R E V P R E S S :: <em>Digital tools for radical change.</em>',
                'href'  => is_admin() ? home_url() : admin_url() . '/edit.php?post_type=action',
            ]);

            $bar->add_node([
                'id' => 'my-account',
                'title' => str_replace('Howdy', 'Hola', $bar->get_node('my-account')->title
                ),
            ]);
        }, 999);
    }
}
