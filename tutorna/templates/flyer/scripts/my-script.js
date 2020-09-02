
var priceType;

function initHeader() {
	$('header .pi-icons').click(function(){
		$(".menu-panel").addClass("open");
		$(".overlay").addClass("show");
		$("header .pi-panel .btn-close").addClass("show");
		$("header .pi-panel").slideDown(350);
	});

	$('header .pi-panel .btn-close').click(function(){
		$(".menu-panel").removeClass("open");
		$(".overlay").removeClass("show");
		$("header .pi-panel .btn-close").removeClass("show");
		$("header .pi-panel").slideUp(350);
	});
  
	$('.overlay').click(function(){
		$(".menu-panel").removeClass("open");
		$(".overlay").removeClass("show");
		$("header .pi-panel .btn-close").removeClass("show");
		$("header .pi-panel").slideUp(350);
	});

	$('ul.menu .pricing').click(function(){
		$('html, body').animate({
			scrollTop: $("#pricing").offset().top
		}, 1200);
	});
	$('ul.menu .materials').click(function(){
		$('html, body').animate({
			scrollTop: $("#materials").offset().top
		}, 1200);
	});
};

function initExpertise(){

	$(".expertise .item").on("click", function() {
		if ($(this).hasClass("open")) {
		   $(this).removeClass("open");
		   $(this).find(".more").slideUp(350);
		} else {
		   $(".expertise .item").removeClass("open");
		   $(".expertise .item .more").slideUp(350);
		   $(this).addClass("open");
		   $(this).find(".more").slideDown(350);
		}
	});
} 

function initOwlCarousel(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		singleItem: true,
		margin:10,
		autoPlay: false,
		dots:true,
		autoplay: false,
		loop: true,
		autoplayTimeout:5000,
		smartSpeed: 1000
	});
}

function initPricing(){

	function renderPricingVars(){
		var total = Math.floor((lessonNum * lessonPrice) + (chatTime * chatPrice) + (offlineTime * offlinePrice));

		$('.lesson-val').html(lessonNum);	
		$('.chat-time-val').html(chatTime);	
		$('.offline-time-val').html(offlineTime);
		$(".pricing .price .num").html(total);
	}

	$(".pricing .line-inner").on("click", function() {
		priceType = $(this).data('type');
		$(".pricing .update-panel .header .txt").removeClass('show');
		$(".pricing .update-panel .header .txt." + priceType).addClass("show");
		$(".pricing .update-panel .footer").removeClass('show');

    if(priceType == 'lesson') {
			$('#price-input').val(lessonNum);	
		}
    else if(priceType == 'chat') {
			$('#price-input').val(chatTime);	
		}
		else if(priceType == 'offline') {
			$('#price-input').val(offlineTime);	
		}

		$(".pricing .update-panel").toggleClass("open");
	});

	$(".pricing .update-panel .btn-close").on("click", function() {
		$(".pricing .update-panel").toggleClass("open");
	});
  
   	$(".btn-open-info").on("click", function() {
		$(".pricing .wrapper").toggleClass("expand");
		$(".pricing .info-panel").toggleClass("open");
	});	
	
	$(".pricing .info-panel .btn-close").on("click", function() {
		$(".pricing .wrapper").toggleClass("expand");
		$(".pricing .info-panel").toggleClass("open");
	});

	$(".sign-btn.up").on('click', function(){
		var skip = 15;
		var val = parseInt($("#price-input").val());

		if(priceType === "lesson"){
			skip = 1;
		 }
 
		if($.isNumeric(val)){
			var t = 100*skip;
			if(val + skip <= t){
				t = val + skip;
			}
			$("#price-input").val(t);
			$(".pricing .update-panel .footer").addClass('show');
		}
	});

	$(".sign-btn.down").on('click', function(){
		var skip = 15;
		var val = parseInt($("#price-input").val());

        if(priceType === "lesson"){
		   skip = 1;
		}

		if($.isNumeric(val)){
			var t = 0;
			if(val >= skip){
				t = val - skip;
			}
			
			$("#price-input").val(t);
			$(".pricing .update-panel .footer").addClass('show');
		}
	});

	$(".update-panel .btn-ok").on('click', function(){
		var max = 1500;
		var val = parseInt($("#price-input").val());

        if(priceType === "lesson"){
		   skip = 100;
		}
		if($.isNumeric(val)){
			if(priceType === "lesson"){
				if(val < max){
					lessonNum = val;	
				}
			}
			if(priceType === "chat"){
				if(val <= max){
					chatTime = val;	
				}
			}
			if(priceType === "offline"){
				if(val <= max){
					offlineTime = val;	
				}
			}
		}
		renderPricingVars();
		$(".pricing .update-panel").toggleClass("open");
	});

	renderPricingVars();
}

function initStudyMaterials(){
	$('.materials .icn-wrapper').on('click', function(){
		$('.material-list').addClass('open');
		setTimeout(() => {
			$('.material-list .list-wrapper').addClass('open');
		}, 300);
	});
}

$( document ).ready(function() {

	new Typed('#typed', {
		stringsElement: '#typed-strings',
		typeSpeed: 35,
		backDelay: 1300,
    backSpeed: 35,
    showCursor: false,
		// loop:true,
		preStringTyped: function(pos, self) { 
			$('.home .subjects').removeClass('show');
			$('.home .subjects.arr' + pos).addClass('show');
    },
    onComplete: function(self){
      $('.btn-replay').addClass('show');
    }
	});


	$('.btn-replay').click(function(){
    $('.btn-replay').removeClass('show');
		$('.typed-cursor').remove();
		$('#typed').empty();
		new Typed('#typed', {
			stringsElement: '#typed-strings',
			typeSpeed: 35,
			backDelay: 1400,
      backSpeed: 35,
      showCursor: false,
			preStringTyped: function(pos, self) { 
				$('.home .subjects').removeClass('show');
				$('.home .subjects.arr' + pos).addClass('show');
      },
      onComplete: function(self){
        $('.btn-replay').addClass('show');
      }
		});
	})

	initHeader();
	initExpertise();
	initOwlCarousel();
	initPricing();
    initStudyMaterials();
});