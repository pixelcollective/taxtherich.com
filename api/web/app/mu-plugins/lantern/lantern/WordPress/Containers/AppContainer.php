<?php

namespace Lantern\WordPress\Containers;

use \Carbon_Fields\Container;
use \Carbon_Fields\Field;

class AppContainer
{
    public $field_set;
    public $desc;

    public function __construct()
    {
        $this->groupA()
             ->groupB()
             ->groupC();
    }

    public function groupA()
    {
        Container
            ::make('post_meta', __('Hero Content', 'lantern'))
            ->where('post_type', '=', 'app')

            ->add_fields([
                Field::make('html', 'admin_description')
                    ->set_html(__('<p>This first set of fields controls the content of the green hero image (top).</p>', 'lantern')),

                Field::make('text', 'title', 'Heading'),
                Field::make('text', 'subtitle', 'Subheading'),
                Field::make('rich_text', 'disclaimer', 'Disclaimer')
            ]);

        return $this;
    }

    public function groupB()
    {
        Container
            ::make('post_meta', __('Introduction', 'lantern'))
            ->where('post_type', '=', 'app')

            ->add_tab(__('General', 'lantern'), [
                Field::make('html', 'admin_description')
                     ->set_html(__('<p>The introductory section contains a heading, short paragraph, and a three item list.</p>', 'lantern')),
                Field::make('text', 'heading', 'Heading'),
                Field::make('rich_text', 'content', 'Content')
            ])
            ->add_tab(__('List Item One', 'lantern'), [
                Field::make('html', 'admin_description_b', __('Section Description', 'lantern'))
                    ->set_html(__('<p>The introductory section contains a heading, short paragraph, and a three item list.</p>', 'lantern')),
                Field::make('text', 'list_item_one', __('List Item One', 'lantern')),
            ])
            ->add_tab(__('List Item Two', 'lantern'), [
                Field::make('html', 'admin_description_c', __('Section Description', 'lantern'))
                    ->set_html(__('<p>The introductory section contains a heading, short paragraph, and a three item list.</p>', 'lantern')),
                Field::make('text', 'list_item_two', __('List Item Two', 'lantern')),
            ])
            ->add_tab(__('List Item Three', 'lantern'), [
                Field::make('html', 'admin_description_d', __('Section Description', 'lantern'))
                    ->set_html(__('<p>The introductory section contains a heading, short paragraph, and a three item list.</p>', 'lantern')),
                Field::make('text', 'list_item_three', __('List Item Three', 'lantern')),
            ]);

        return $this;
    }

    public function groupC()
    {
        Container
            ::make('post_meta', __('Tax The Rich Act', 'lantern'))
            ->where('post_type', '=', 'app')

            ->add_tab(__('General', 'lantern'), [
                Field::make('html', 'admin_description_a')
                    ->set_html(__('<p>Heading and three columns that detail the Tax The Rich Act demands.</p>', 'lantern')),
                    Field::make('text', 'section_heading', __('Section Heading', 'lantern')),
            ])
            ->add_tab(__('Column One', 'lantern'), [
                Field::make('html', 'admin_description_b', __('Section Description', 'lantern'))
                    ->set_html(__('<p>Heading and three columns that detail the Tax The Rich Act demands.</p>', 'lantern')),
                Field::make('text', 'column_one_heading', __('Column One Heading', 'lantern')),
                Field::make('rich_text', 'column_one_content', __('Column One Content', 'lantern'))
            ])
            ->add_tab(__('Column Two', 'lantern'), [
                Field::make('html', 'admin_description_c', __('Section Description', 'lantern'))
                    ->set_html(__('<p>Heading and three columns that detail the Tax The Rich Act demands.</p>', 'lantern')),
                Field::make('text', 'column_two_heading', __('Column Two Heading', 'lantern')),
                Field::make('rich_text', 'column_two_content', __('Column Two Content', 'lantern'))
            ])
            ->add_tab(__('Column Three', 'lantern'), [
                Field::make('html', 'admin_description_d', __('Section Description', 'lantern'))
                    ->set_html(__('<p>Heading and three columns that detail the Tax The Rich Act demands.</p>', 'lantern')),
                Field::make('text', 'column_three_heading', __('Column Three Heading', 'lantern')),
                Field::make('rich_text', 'column_three_content', __('Column Three Content', 'lantern'))
            ]);

        return $this;
    }
}
