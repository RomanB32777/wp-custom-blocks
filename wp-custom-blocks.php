<?php
/**
 * Plugin Name:       Wordpress custom blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.1
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
