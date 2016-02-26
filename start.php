<?php

/**
 * Defer CSS
 *
 * @author Ismayil Khayredinov <info@hypejunction.com>
 * @copyright Copyright (c) 2015, Ismayil Khayredinov
 */
require_once __DIR__ . '/autoloader.php';

elgg_register_event_handler('init', 'system', 'defer_css_init');

/**
 * Initialize the plugin
 * @return void
 */
function defer_css_init() {

	elgg_extend_view('page/elements/foot', 'defer');

}

/**
 * Defers CSS view loading
 * Or returns an array of deferred views if $view is null
 *
 * @staticvar array $deferred
 * @param string $view CSS view name
 * @return array
 */
function defer_css($view = null) {
	
	static $deferred;
	
	if (!isset($deferred)) {
		$deferred = array();
	}

	if (!isset($view)) {
		return $deferred;
	}
	if (!preg_match("/.*\.css$/", $view)) {
		return;
	}
	if (!elgg_view_exists($view)) {
		return $deferred;
	}

	$deferred[] = $view;
	
	return $deferred;
}
