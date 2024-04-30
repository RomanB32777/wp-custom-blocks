<?php
/**
 * Plugin Name:       WordPress custom blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.5
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

function enqueue_plugin_versioned_style( $handle, $path = '', $deps = array(), $media = 'all' ) {
	$style_url = plugin_dir_url( __FILE__ ) . $path;

	wp_register_style( $handle, $style_url, $deps, @filemtime( $style_url ), $media );
	wp_enqueue_style( $handle );
}

function style_plugin() {
	enqueue_plugin_versioned_style( 'wp_custom_blocks_style', 'build/style.css' );
	enqueue_plugin_versioned_style( 'wp_custom_blocks_fonts', 'build/fonts.css' );
}
add_action( 'enqueue_block_editor_assets', 'style_plugin' );

function enqueued_front_style_plugin() {
	if ( ! wp_style_is( 'wp_custom_main_style', 'enqueued' ) ) {
		style_plugin();
	}
}
add_action( 'wp_enqueue_scripts', 'enqueued_front_style_plugin', 999 );

function script_plugin() {
	enqueue_plugin_versioned_script( 'wp_custom_blocks_swiper', 'build/swiper.js' );
}
add_action( 'wp_enqueue_scripts', 'script_plugin' );

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
		'images'      => 'image',
		'steps'       => 'step',
		'main-banner' => 'sport-card',
		'faq'         => 'faq-item',
		'icon-links'  => 'icon-link',
		'template'    => array(
			'advantage',
			'card',
			'image',
		),
		'table',
		'button',
		'pros-cons',
		'content',
		'author',
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
 * Render blocks
 */
function render_custom_block( $block_content, $block ) {
	$block_name_full                      = $block['blockName'];
	list($block_name_prefix, $block_name) = explode( '/', $block_name_full );


	if ( isset( $block_name_full ) && str_contains( $block_name_full, $block_name_prefix ) ) {
		/**
		 * Register Inline Style
		 */
		if ( isset( $block['attrs']['blockStyle'] ) ) {

			$style  = $block['attrs']['blockStyle'];
			$handle = isset( $block['attrs']['uniqueId'] ) ? $block['attrs']['uniqueId'] : $block_name_prefix;

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

		$swiper_blocks = array(
			'banner',
			'template',
			'table',
		);

		if ( in_array( $block_name, $swiper_blocks, true ) && ! wp_style_is( 'wp_custom_blocks_swiper', 'enqueued' ) ) {
			enqueue_plugin_versioned_style( 'wp_custom_blocks_swiper', 'build/swiper-styles.css' );

		}
	}
	return $block_content;
}
add_filter( 'render_block', 'render_custom_block', 10, 2 );

function add_light_modal( $content ) {
	// Check if we're inside the main loop in a single Post.
	if ( is_singular() && in_the_loop() && is_main_query() ) {
		$modal_code = '
			<div
				class="fixed inset-0 z-50 hidden w-screen h-screen flex justify-center items-center"
				id="light-modal"
			>
				<div class="light-modal-close fixed inset-0 bg-black/70"></div>
				<button
					class="light-modal-close rounded-md text-white fixed z-90 top-8 right-8"
					type="button"
				>
					<span class="sr-only">Close modal</span
					><svg
						class="h-6 w-6"
						fill="none"
						viewbox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<img
						class="relative max-w-full object-cover rounded-lg lg:max-w-[800px] max-h-[600px]"
						id="light-modal-preview"
					/>
				</div>
			</div>
		';

		return $content . $modal_code;
	}

	return $content;
}
add_filter( 'the_content', 'add_light_modal', 1 );

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
