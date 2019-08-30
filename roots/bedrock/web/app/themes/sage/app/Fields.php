<?php
namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder as Builder;

class Fields
{
    protected static $tab = ['placement' => 'left'];

    /**
     * Wrapper
     *
     * @param  int $width
     * @return array
     */
    public function wrapper(int $width, bool $ui = true) : array
    {
        return ['ui' => $ui, 'width' => $width, 'seamless' => 1];
    }

    public function __invoke()
    {
        $action = new Builder('action');

        $action
            ->addFields($this->fieldset('page'))
            ->addFields($this->fieldset('content'))
            ->addFields($this->fieldset('target'))
            ->addFields($this->fieldset('design'))

            ->setLocation('post_type', '==', 'action');

        \acf_add_local_field_group($action->build());
    }

    public function page($fields)
    {
        $fields
            ->addTab('Page', self::$tab)

                ->addMessage('Page elements', 'Provide context for why this action is important.')
                ->addGroup('page', ['style' => 'seamless'])
                    ->addText('heading', [
                        'label'        => 'Heading',
                        'instructions' => 'The heading of the take action page.',
                        'required'     => 1,
                        'wrapper'      => $this->wrapper(100)])

                    ->addText('subheading', [
                        'label'        => 'Subheading',
                        'required'     => 1,
                        'instructions' => 'The subheading of the take action page.',
                        'wrapper'      => $this->wrapper(100)])

                    ->addImage('featured_image', [
                        'label'        => 'Featured image',
                        'preview_size' => 'large',
                        'wrapper'      => $this->wrapper(100),
                        'instructions' => 'Select an image to act as a faceplate for this action.'])

                ->endGroup();

        return $fields;
    }

    public function design($fields)
    {
        $fields
            ->addTab('Design', self::$tab)
                ->addMessage('Design elements', 'Customize the look of this action.')

                ->addGroup('design', ['style' => 'seamless'])
                    ->addColorPicker('color_primary', [
                        'label'         => 'Primary color',
                        'default_value' => '#1e73be',
                        'wrapper'       => $this->wrapper(50)])


                    ->addColorPicker('color_secondary', [
                        'label'         => 'Secondary color',
                        'default_value' => '#000000',
                        'wrapper'       => $this->wrapper(50)])

                    ->addImage('background_image', [
                        'label'        => 'Background image',
                        'preview_size' => 'large',
                        'wrapper'      => $this->wrapper(100)])
                ->endGroup();

        return $fields;
    }

    public function target($fields)
    {
        $fields
            ->addTab('Action Target', self::$tab)

                ->addMessage('Powerholder profile', 'Who is this action targeting?')

                ->addGroup('profile', ['style' => 'seamless'])
                    ->addText('name', [
                        'label'        => 'Name',
                        'instructions' => 'Full name of the action target.',
                        'wrapper'      => $this->wrapper(50),
                        'required'     => 1])

                    ->addEmail('email', [
                        'label'        => 'Email',
                        'wrapper'      => $this->wrapper(50),
                        'instructions' => 'Email address where the actions will be sent.',
                        'required'     => 1])

                    ->addImage('headshot', [
                        'label'        => 'Headshot',
                        'wrapper'      => $this->wrapper(33),
                        'instructions' => 'Upload an image of the action target.',
                        'required'     => 1])

                    ->addWysiwyg('about', [
                        'label'        => 'Biography',
                        'wrapper'      => $this->wrapper(66),
                        'instructions' => 'Who is this person?',
                        'required'     => 1])
                ->endGroup()

                ->addGroup('affiliation', ['label' => 'Additional information'])
                    ->addTrueFalse('additionalInfo', [
                        'label'        => 'Additional information',
                        'instructions' => 'Supply additional information to be presented on the action page.',
                        'ui'           => true])

                    ->addButtonGroup('sector', [
                        'label'         => 'Sector',
                        'wrapper'       => $this->wrapper(25),
                        'layout'        => 'vertical',
                        'default_value' => 'na',
                        'choices'       => [
                            'na'        => 'Not applicable',
                            'elected'   => 'Elected',
                            'corporate' => 'Corporate']])
                        ->conditional('additionalInfo', '==', 1)

                    ->addGroup('Company', [
                        'style'   => 'seamless',
                        'wrapper' => ['width' => 75]])
                        ->conditional('sector', '==', 'corporate')

                        ->addText('company', [
                            'label'   => 'Company Name',
                            'wrapper' => $this->wrapper(100)])

                        ->addImage('logo', [
                            'label'   => 'Logo',
                            'wrapper' => $this->wrapper(100)])

                        ->addText('position', [
                            'label'   => 'Position',
                            'wrapper' => $this->wrapper(100)])

                        ->addGoogleMap('address', [
                            'label' => 'Corporate headquarters'])
                    ->endGroup()

                    ->addGroup('Elected', [
                        'style'   => 'seamless',
                        'wrapper' => ['width' => 75]])
                        ->conditional('sector', '==', 'elected')
                        ->addButtonGroup('party', [
                            'label'           => 'Party',
                            'wrapper'         => $this->wrapper(100),
                            'layout'          => 'horizontal',
                            'default_value'   => 'na',
                            'choices'         => [
                                'na'          => 'Not applicable',
                                'democrat'    => 'Democrat',
                                'republican'  => 'Elected',
                                'independent' => 'Independent']])

                        ->addButtonGroup('jurisdiction', [
                            'label'           => 'Jurisdiction',
                            'wrapper'         => $this->wrapper(100),
                            'layout'          => 'horizontal',
                            'default_value'   => 'na',
                            'choices'         => [
                                'na'          => 'Not applicable',
                                'executive'   => 'Executive',
                                'federal'     => 'Federal',
                                'state'       => 'State',
                                'local'       => 'Local']])
                        ->addGoogleMap('address', [
                            'label' => 'Address'])
                    ->endGroup()
                ->endGroup();

        return $fields;
    }

    public function content($fields)
    {
        $fields
            ->addTab('Action Content', self::$tab)

                ->addMessage('Action content', 'Describe the action and provide the sign-on language.')

                ->addGroup('action', ['style' => 'seamless'])
                    ->addText('heading', [
                        'label'        => 'Action heading',
                        'instructions' => 'The heading of the take action page.',
                        'default_value' => 'Enough!',
                        'required'     => 1,
                        'wrapper'      => $this->wrapper(50)])

                    ->addWysiwyg('context', [
                        'label'        => 'Action context',
                        'instructions' => 'Why should people take this action?',
                        'required'     => 1,
                        'wrapper'      => $this->wrapper(100)])

                    ->addButtonGroup('format', [
                        'label'         => 'Format of action',
                        'wrapper'       => $this->wrapper(25),
                        'layout'        => 'vertical',
                        'default_value' => 'petition',
                        'choices'       => [
                            'petition'  => 'Petition',
                            'letter'    => 'Letter']])

                    ->addGroup('letter', [
                        'label'   => 'Letter content',
                        'wrapper' => ['width' => 75]])
                        ->conditional('format', '==', 'letter')
                        ->addText('salutations', [
                            'label'         => 'Salutations',
                            'instructions'  => 'The letter greeting',
                            'default_value' => 'Dear'])

                        ->addWysiwyg('letter', [
                            'label'         => 'Letter',
                            'instructions'  => 'The letter body.',
                            'required'      => 1,
                            'default_value' => '<p>You must do the thing.</p>',
                            'wrapper'       => $this->wrapper(100)])

                        ->addText('regards', [
                            'label'         => 'Regards',
                            'default_value' => 'Thank you',
                            'instructions'  => 'The letters sign-off',
                            'wrapper'       => $this->wrapper(100)])
                    ->endGroup()

                    ->addGroup('petition', [
                        'label'   => 'Petition content',
                        'wrapper' => ['width' => 75]])
                        ->conditional('format', '==', 'petition')
                        ->addWysiwyg('petition', [
                            'label'        => 'Petition',
                            'instructions' => 'The petition text.',
                            'default_value' => '<p>This is the <strong>single most important thing</strong> that must be done immediately. Give it a rest, already.</p>',
                            'required'     => 1,
                            'wrapper'      => $this->wrapper(100)])
                    ->endGroup()

                    ->addText('button_text', [
                        'label'         => 'Sign-on button text',
                        'default_value' => 'Take action',
                        'instructions'  => 'Customize the confirmation button',
                        'required'      => 1,
                        'wrapper'       => $this->wrapper(100)])
                ->endGroup();

        return $fields;
    }

    /**
     * Fieldset
     */
    protected function fieldset($fieldset) : Builder
    {
        return $this->$fieldset(new Builder($fieldset));
    }
}
