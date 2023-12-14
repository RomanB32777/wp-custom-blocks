<?php
/**
 * Plugin Name:       Topbook wp blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.2
 * Author:            Test
 * License:
 * License URI:
 * Text Domain:       topbook-blocks
 *
 * @package           topbook-blocks
 */

function blocks_init() {
	$blocks = array(
		'step',
		'steps',
		'banner',
		'author',
	);

	foreach ($blocks as $block) {
		register_block_type( __DIR__ . "/build/blocks/{$block}" );
	}
}

add_action( 'init', 'blocks_init' );
