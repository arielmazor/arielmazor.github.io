
var arry = [];
var filter = -1;

/* -----------------------------------------------
get filter for gallery
----------------------------------------------- */
function setFilter(num){
filter = num;
}

/* -----------------------------------------------
show modal
----------------------------------------------- */
function showModal( id) {
  var height = 0;
  var _arry;
/* -----------------------------------------------*/
  if (filter == 1) {
    $(".modal").removeClass("apps").removeClass("all").addClass("design");
    _arry = $(".modal .image-wrapper.design");
  } else if (filter == 2) {
    $(".modal").removeClass("design").removeClass("all").addClass("apps");
    _arry = $(".modal .image-wrapper.apps");
  }else {
    $(".modal").removeClass("design").removeClass("apps").addClass("all")
    _arry = $(".modal .image-wrapper");
  }
/* -----------------------------------------------*/
  for (var i = 0; i < _arry.length; i++) {
    if (_arry[i].id == id) {
      break;
    } else {
      height += $(`#${_arry[i].id}`).height();
    }
  }
/* -----------------------------------------------*/
  $(".modal").addClass("show");
  $("body").addClass("no-scroll");
  /* -----------------------------------------------*/
    $('.modal').scrollTop(height);
}
/* -----------------------------------------------
anintion top
----------------------------------------------- */
$('.btn-p').click(function() {
  $('html, body').animate({
    scrollTop: $('.protfolio').position().top
  }, 700);
})
  /* -----------------------------------------------*/
$('.btn-a ').click(function() {
  $('html, body').animate({
    scrollTop: $('.about').position().top
  }, 700);
})
$('.logo').click(function() {
  $('html, body').animate({
    scrollTop: $('header').position().top
  }, 700);
})
$('.protfilio-btn ').click(function() {
  $('html, body').animate({
    scrollTop: $('.protfolio').position().top
  }, 700);
})
/* -----------------------------------------------
cose modal
----------------------------------------------- */
function closeModal() {
  $(".modal").removeClass("show");
  $("body").removeClass("no-scroll");
}
/* -----------------------------------------------
header change color 
----------------------------------------------- */
jQuery(document).ready(function() {
  $(window).scroll(function() {
    if ($('body').scrollTop() > 20) {
      $('.nav').addClass('white');
    } else {
      $('.nav').removeClass('white');
    }
  })
})