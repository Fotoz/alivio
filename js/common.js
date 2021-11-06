$(function () {

	// Checking for touch event:
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		document.body.classList.add('_touch');
	} else {
		document.body.classList.add('_no-touch');
	}

	// Embed video:
	$('.embed__poster').on('click', function() {
		var poster  = $(this),
				wrapper = poster.closest('.embed__poster');

		videoPlay(wrapper);
	});

	function videoPlay(wrapper) {
		var iframe = wrapper.find('.embed__iframe');

		wrapper.fadeToggle(2000);
		$('.embed__iframe')[0].src += '?autoplay=1';
	};

	// Forbids to move images and links on the page:
	$('img, a').on('dragstart', function(event) {
		event.preventDefault();
	});

	// Hamburger toggle:
	$('.hamburger').on('click', function (event) {
		event.preventDefault();

		$('.hamburger, .header__nav').toggleClass('is-active');
		$('body').toggleClass('_of-hidden');
	});

	// Hide the menu and return the standard view of the hamburger:
	$('.header a').on('click', function (event) {
		event.preventDefault();

		if ( $(document).width() < 992 ) {
			$('.hamburger, .header__nav').removeClass('is-active');
			$('body').removeClass('_of-hidden');
		}
	});

	// Resetting scroll for menu:
	$('.hamburger, .header a').on('click', function (event) {
		event.preventDefault();

		$('.header__nav').delay(350).queue(function (reset_scroll) {
			$(this).scrollTop(0);
			reset_scroll();
		});
	});

	// Removing classes for menu if window resize:
	$(window).on('resize', function () {
		var width = $(document).width();

		if (width > 991) {
			$('body').removeClass('_of-hidden');
			$('.hamburger, .header__nav').removeClass('is-active');
		}
	});

	//===== Smooth scroll:
	$('a[href^="#"]:not([href="#"])').on('click', function(event) {
		event.preventDefault();

		if ( $(document).width() > 991 ) {
			$('html,body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 350);
		} else {
			$('html,body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 60
			}, 350);
		}
	});

});
