<?php
/**
 * Plugin Name:       Wordpress custom blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.2
 * Author:            Test
 * License:
 * License URI:
 * Text Domain:       wp-custom-blocks
 *
 * @package wp-custom-blocks
 */

//  Exit if accessed directly.
if (! defined('ABSPATH') ) {
    exit;
}

function blocks_init()
{
    $blocks = array(
    'step',
    'steps',
    'banner',
    'author',
    );

    foreach ($blocks as $block) {
        register_block_type(__DIR__ . "/build/blocks/{$block}");
    }
}

add_action('init', 'blocks_init');

/**
 * Register Block Category
 */
function register_block_category( $block_categories, $editor_context )
{
    if (! empty($editor_context->post) ) {
        array_unshift(
            $block_categories,
            array(
            'slug'  => 'wp-custom-blocks',
            'title' => __('WP Custom Blocks', 'wp-custom-blocks'),
            'icon'  => null,
            )
        );
    }
    return $block_categories;
}

add_filter('block_categories_all', 'register_block_category', 10, 2);
