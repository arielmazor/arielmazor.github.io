
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
function href(num) {
	if (num == 1) {
		window.open("https://arielmazor.github.io/projects/register/HTML/register.HTML")
	}
	if (num == 2) {
		window.open("https://arielmazor.github.io/projects/contacts/HTML/contacts.HTML")
	}
	if (num == 3) {
		window.open("https://arielmazor.github.io/projects/indexes/HTML/indexes.HTML")
	} if (num == 4) {
		window.open("https://arielmazor.github.io/projects/Friends%20Num%20List/FriendsNumList.HTML")
	}

}
function initProjectsCarousel() {

	$("#slider").slick({
		speed: 1000,
		dots: true,
		dotsClass: 'slide-dots',
		prevArrow: '<div class="slick-prev "></div>',
		nextArrow: '<div  class="slick-next "></div>',
	});
}


$(document).ready(function () {
	initHeader();
	initProjectsCarousel();
});
