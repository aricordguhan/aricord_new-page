<?php
/**
 * Plugin Name: Aricord Sample Page
 * Description: Serves the Aricord static site on the "sample-page" page only. Every other page, including the home page, is left to the active theme.
 * Version:     1.0.0
 * Author:      Aricord
 */

if (!defined('ABSPATH')) {
    exit;
}

// Slug of the WordPress page that should show the static site.
define('ARICORD_SP_SLUG', 'sample-page');
define('ARICORD_SP_VERSION', '1.0.0');

add_action('template_redirect', function () {
    if (!is_page(ARICORD_SP_SLUG)) {
        return;
    }

    // ?view=news shows news.html, otherwise index.html.
    $view = (isset($_GET['view']) && $_GET['view'] === 'news') ? 'news' : 'index';
    $file = __DIR__ . '/site/' . $view . '.html';
    if (!is_readable($file)) {
        return;
    }

    $base = plugin_dir_url(__FILE__) . 'site/';
    $page = get_permalink();

    // Rewrite relative src/href values so assets load from the plugin folder
    // and links between index.html and news.html stay on this page.
    $html = preg_replace_callback('/\b(src|href)="([^"]*)"/i', function ($m) use ($base, $page) {
        $attr = $m[1];
        $url  = $m[2];

        if ($url === '' || preg_match('#^(https?:|//|mailto:|tel:|data:|javascript:|\#)#i', $url)) {
            return $m[0];
        }

        $hash = '';
        if (($pos = strpos($url, '#')) !== false) {
            $hash = substr($url, $pos);
            $url  = substr($url, 0, $pos);
        }

        if ($url === 'index.html') {
            $url = $page;
        } elseif ($url === 'news.html') {
            $url = add_query_arg('view', 'news', $page);
        } else {
            $url = $base . str_replace('\\', '/', $url);
            if (preg_match('/\.(css|js)$/i', $url)) {
                $url = add_query_arg('ver', ARICORD_SP_VERSION, $url);
            }
        }

        return $attr . '="' . esc_url($url . $hash) . '"';
    }, file_get_contents($file));

    status_header(200);
    header('Content-Type: text/html; charset=UTF-8');
    echo $html;
    exit;
});
