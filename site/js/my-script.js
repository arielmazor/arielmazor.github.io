
var priceType;


function initHeader() {
	$('header .pi-icons').click(function () {
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

	$('.overlay').click(function () {
		if ($('header .menu-btn').hasClass("open")) {
			$('header .menu-btn').click();
		}
		if ($('header .pi-icons').hasClass("open")) {
			$('header .pi-icons').click();
		}
	});
};

function initProjectsCarousel() {

	$("#slider").slick({
		speed: 1000,
		dots: true,
		dotsClass: 'slide-dots'
	});
}


$(document).ready(function () {

	initHeader();
	initProjectsCarousel();
});
