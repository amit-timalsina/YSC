(function ($) {
	// Navbar Menu JS
	$('.navbar-nav li a').on('click', function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 1500);
		e.preventDefault();
	});
	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});
	$('.navbar-nav li a').on('click', function () {
		$('.navbar-collapse').collapse('hide');
		$('.burger-menu').removeClass('active');
	});

	// Burger Menu
	$('.burger-menu').on('click', function () {
		$(this).toggleClass('active');
	});
	// Header Sticky
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.navbar').addClass("is-sticky");
		}
		else {
			$('.navbar').removeClass("is-sticky");
		}
	});
	$('.home-slides, .home-slides-two').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
	});
	$(".home-slides-two").on("translate.owl.carousel", function () {
		$(".main-banner-content .sub-title").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-content .btn-box").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner-image img").removeClass("animated fadeInUp").css("opacity", "0");
	});
	$(".home-slides-two").on("translated.owl.carousel", function () {
		$(".main-banner-content .sub-title").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-content .btn-box").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner-image img").addClass("animated fadeInUp").css("opacity", "1");
	});
	// setInterval(function() { makeTimer(); }, 0);
	// Odometer JS
	$('.odometer').appear(function () {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
			console.log('amit')
		});
	});

	// WoW JS
	$(window).on('load', function () {
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: 'wow',      // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset: 20,         // Distance to the element when triggering the animation (default is 0)
				mobile: true,       // Trigger animations on mobile devices (default is true)
				live: true,       // Act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});
}(jQuery));