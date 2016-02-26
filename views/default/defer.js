define(function (require) {

	var $ = require('jquery');
	var elgg = require('elgg');

	var stylesheets = [];
	var loaded = [];
	var loadFired = false;

	var cb = function () {
		loadFired = true;
		$.each(stylesheets, function (i, view) {
			if (typeof view !== 'string') {
				return;
			}
			if (!view.match(/.*\.css$/)) {
				return;
			}
			if (loaded.indexOf(view) !== -1) {
				return;
			}
			
			var href = elgg.get_simplecache_url(view);
			if ($('link[href="' + href + '"]').length) {
				return;
			}
			$('<link>').attr({
				rel: 'stylesheet',
				href: href
			}).appendTo($('head'));

			loaded.push(view);
		});
	};

	elgg.loadCSS = function (views) {
		var views = views || [];
		if (typeof views === 'string') {
			if (stylesheets.indexOf(views) === -1) {
				stylesheets.push(views);
			}
		} else {
			views.forEach(function(view) {
				if (stylesheets.indexOf(view) === -1) {
					stylesheets.push(view);
				};
			});
		}

		var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
		if (typeof raf) {
			raf(cb);
		} else if (!loadFired) {
			$(window).on('load', cb);
		} else {
			cb();
		}

		return true;
	};

	return elgg.loadCSS;
});