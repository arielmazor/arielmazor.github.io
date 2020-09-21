var priceType;

function initHeader() {
	$("header .pi-icons").click(function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(".overlay").removeClass("show");
			$("header .pi-panel").slideUp(350);
		} else {
			$(this).addClass("open");
			$(".overlay").addClass("show");
			$("header .pi-panel").slideDown(350);
		}
	});

	$(".overlay").click(function () {
		if ($("header .menu-btn").hasClass("open")) {
			$("header .menu-btn").click();
		}
		if ($("header .pi-icons").hasClass("open")) {
			$("header .pi-icons").click();
		}
	});
}

function showCarusal(carusalName) {
	$(".title").removeClass("active");
	$(".container").removeClass("show");

	if (carusalName == "art") {
		$(".title.art").addClass("active");
		$(".container.art").addClass("show");
		initProjectsCarousel("art");
	} else if (carusalName == "apps") {
		$(".title.apps").addClass("active");
		$(".container.apps").addClass("show");
		initProjectsCarousel("apps");
	}
}

function initProjectsCarousel(carouselName) {
	$(".carousel-" + carouselName).owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		margin: 10,
		nav: true,
		dots: false,
		mouseDrag: false,
		navText: [
			'<span class="wide-arrow left"></span>',
			'<span class="wide-arrow right"></span>',
		],
	});
}

$(document).ready(function () {
	initHeader();
	showCarusal("art");
});
