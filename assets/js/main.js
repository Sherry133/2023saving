/*
	Atmosphere by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function ($) {
	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px'],
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly({
		offset: function () {
			return $header.height();
		},
	});

	// Header.
	if ($banner.length > 0 && $header.hasClass('alt')) {
		$window.on('resize', function () {
			$window.trigger('scroll');
		});

		$banner.scrollex({
			bottom: $header.outerHeight(),
			terminate: function () {
				$header.removeClass('alt');
			},
			enter: function () {
				$header.addClass('alt');
			},
			leave: function () {
				$header.removeClass('alt');
			},
		});
	}

	// Menu.
	var $menu = $('#menu');

	$menu._locked = false;

	$menu._lock = function () {
		if ($menu._locked) return false;

		$menu._locked = true;

		window.setTimeout(function () {
			$menu._locked = false;
		}, 350);

		return true;
	};

	$menu._show = function () {
		if ($menu._lock()) $body.addClass('is-menu-visible');
	};

	$menu._hide = function () {
		if ($menu._lock()) $body.removeClass('is-menu-visible');
	};

	$menu._toggle = function () {
		if ($menu._lock()) $body.toggleClass('is-menu-visible');
	};

	$menu
		.appendTo($body)
		.on('click', function (event) {
			event.stopPropagation();

			// Hide.
			$menu._hide();
		})
		.find('.inner')
		.on('click', '.close', function (event) {
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();

			// Hide.
			$menu._hide();
		})
		.on('click', function (event) {
			event.stopPropagation();
		})
		.on('click', 'a', function (event) {
			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
			$menu._hide();

			// Redirect.
			window.setTimeout(function () {
				window.location.href = href;
			}, 350);
		});

	$body
		.on('click', 'a[href="#menu"]', function (event) {
			event.stopPropagation();
			event.preventDefault();

			// Toggle.
			$menu._toggle();
		})
		.on('keydown', function (event) {
			// Hide on escape.
			if (event.keyCode == 27) $menu._hide();
		});
})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
	var video = document.querySelector('video');
	var m4vSource = document.querySelector('source[src$=".m4v"]');

	if (
		m4vSource &&
		!video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
	) {
		// If .m4v is present but not supported, remove the source to prevent loading errors
		m4vSource.parentNode.removeChild(m4vSource);
	}
});

//ssl-logo
function changeImage(x) {
	// const container = document.querySelector(".ssl-container");
	const rapid = document.getElementById('rapid');

	const comodoImg = document.getElementById('comodo');

	const clone = comodoImg.cloneNode(true);

	while (rapid.firstChild) rapid.firstChild.remove();
	// container.appendChild(clone);
}
changeImage(comodo);
