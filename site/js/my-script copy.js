function initProjectsCarousel() {
	$('.carousel-main').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 1500,
		margin: 10,
		nav: true,
		dots: false,
		navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
	})
}



$(document).ready(function () {
	initProjectsCarousel();
});
