<?php
/*
 * Plugin Name:       WoPo UI Elements
 * Plugin URI:        https://wopoweb.com/product/wopo-ui-elements-wordpress-plugin/
 * Description:       Buttons, Forms, Loaders UI Elements
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            WoPo Web
 * Author URI:        https://wopoweb.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wopo-ui-elements
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly 

function wopoui_register_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'wopoui_register_block' );

function wopoui_filter_block_categories_when_post_provided( $block_categories, $editor_context ) {
    if ( ! empty( $editor_context->post ) ) {
        array_push(
            $block_categories,
            array(
                'slug'  => 'wopo-ui-elements',
                'title' => __( 'WoPo UI Elements', 'wopo-ui-elements' ),
                'icon'  => null,
            )
        );
    }
    return $block_categories;
}

add_filter( 'block_categories_all', 'wopoui_filter_block_categories_when_post_provided', 10, 2 );