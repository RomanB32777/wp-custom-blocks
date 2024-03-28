<?php
/**
 * Plugin Name:       WordPress custom blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.4
 * Author:            Test
 * License:
 * License URI:
 * Text Domain:       wp-custom-blocks
 *
 * @package wp-custom-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function fonts_plugin() {
	wp_enqueue_style( 'googlefonts', '//fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap', array(), null );
}
add_action( 'enqueue_block_editor_assets', 'fonts_plugin' );

function enqueue_plugin_versioned_style( $handle, $path = '', $deps = array(), $media = 'all' ) {
	$style_url = plugin_dir_url( __FILE__ ) . $path;

	wp_register_style( $handle, $style_url, $deps, @filemtime( $style_url ), $media );
	wp_enqueue_style( $handle );
}

function style_plugin() {
	enqueue_plugin_versioned_style( 'wp_custom_blocks_style', 'build/style.css' );
}
add_action( 'enqueue_block_editor_assets', 'style_plugin' );

function enqueued_front_style_plugin() {
	if ( ! wp_style_is( 'wp_custom_main_style', 'enqueued' ) ) {
		style_plugin();
	}
}
add_action( 'wp_enqueue_scripts', 'enqueued_front_style_plugin', 999 );

function enqueue_plugin_versioned_script( $handle, $path = '' ) {
	$main_path = plugin_dir_url( __FILE__ ) . $path;

	wp_register_script(
		$handle,
		$main_path,
		array(),
		@filemtime( $main_path ),
		array(
			'in_footer' => true,
			'strategy'  => 'async',

		)
	);
	wp_enqueue_script( $handle );
}

function blocks_init() {
	$blocks = array(
		'faq'        => 'faq-item',
		'steps'      => 'step',
		'bonuses'    => 'bonus',
		'cards'      => 'card',
		'images'     => 'image',
		'icon-links' => 'icon-link',
		'button',
		'content',
		'banner',
		'author',
		'pros-cons',
		'available-table',
	);

	foreach ( $blocks as $block => $sub_blocks ) {
		if ( is_numeric( $block ) ) {
			register_block_type( __DIR__ . "/build/blocks/{$sub_blocks}" );
			continue;
		}

		$block_path = __DIR__ . "/build/blocks/{$block}";


		register_block_type( $block_path );

		if ( is_array( $sub_blocks ) ) {
			foreach ( $sub_blocks as $sub_block ) {
				register_block_type( $block_path . "/{$sub_block}" );
			}
		} else {
			register_block_type( $block_path . "/{$sub_blocks}" );
		}
	}
}


/**
 * Define the plugin constants
 */
function define_constants() {
	define( 'WP_CUSTOM_BLOCKS_VERSION', '1.0.1' );
	define( 'WP_CUSTOM_BLOCKS_URL', plugin_dir_url( __FILE__ ) );
}
add_action( 'init', 'blocks_init' );

/**
 * Register Block Category
 */
function register_block_category( $block_categories, $editor_context ) {
	if ( ! empty( $editor_context->post ) ) {
		array_unshift(
			$block_categories,
			array(
				'slug'  => 'wp-custom-blocks',
				'title' => __( 'WP Custom Blocks', 'wp-custom-blocks' ),
				'icon'  => null,
			)
		);
	}
	return $block_categories;
}

add_filter( 'block_categories_all', 'register_block_category', 10, 2 );

/**
 * Register Inline Style
 */
function generate_inline_style_on_render_block( $block_content, $block ) {

	if ( isset( $block['blockName'] ) && str_contains( $block['blockName'], 'wp-custom-blocks/' ) ) {
		if ( isset( $block['attrs']['blockStyle'] ) ) {

			$style  = $block['attrs']['blockStyle'];
			$handle = isset( $block['attrs']['uniqueId'] ) ? $block['attrs']['uniqueId'] : 'wp-custom-blocks';

			// convert style array to string
			if ( is_array( $style ) ) {
				$style = implode( ' ', $style );
			}

			// minify style to remove extra space
			$style = preg_replace( '/\s+/', ' ', $style );

			wp_register_style(
				$handle,
				false
			);
			wp_enqueue_style( $handle );
			wp_add_inline_style( $handle, $style );

		}
	}
	return $block_content;
}
add_filter( 'render_block', 'generate_inline_style_on_render_block', 10, 2 );

function plugin_customizer_setting( $wp_customize ) {
	$wp_customize->add_section(
		'plugin_settings',
		array(
			'title'    => esc_html__( 'Plugin settings', 'wp-custom-blocks' ),
			'priority' => 160,
		)
	);

	$wp_customize->add_setting(
		'is_priority_theme_primary_color',
		array(
			'default'    => false,
			'capability' => 'edit_theme_options',
		)
	);
	$wp_customize->add_control(
		'is_priority_theme_primary_color',
		array(
			'label'    => 'Theme colors take precedence over plugin colors',
			'section'  => 'plugin_settings',
			'settings' => 'is_priority_theme_primary_color',
			'type'     => 'checkbox',
		)
	);
}
add_action( 'customize_register', 'plugin_customizer_setting' );
