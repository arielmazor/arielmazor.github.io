var arry = [];

function showModal(filter, id) {
  var height = 0;
  var _arry;

  if (filter == 1) {
    $(".modal").removeClass("apps").addClass("design");
    _arry = $(".modal .image-wrapper.design");
  } else if (filter == 2) {
    $(".modal").removeClass("design").addClass("apps");
    _arry = $(".modal .image-wrapper.design");
  }

  for (var i = 0; i < _arry.length; i++) {
    if (_arry[i].id == id) {
      break;
    } else {
      height += $(`#${_arry[i].id}`).height();
      console.log(height);

    }
  }
  console.log(height);
  // } else {
  //   $(".modal").addClass("show");
  //   $(".modal").removeClass("apps");
  //   $(".modal").removeClass("design");
  //   $(".modal .wrapper .image-wrapper").addClass("all");
  // }
  $(".modal").addClass("show");
  $("body").addClass("no-scroll");



  setTimeout(function() {
    $('.modal').animate({
      scrollTop: height
    }, 500);
  }, 50);


}
$('.btn-p').click(function() {
  $('html, body').animate({
    scrollTop: $('.protfolio').position().top
  }, 700);
})
$('.btn-a ').click(function() {
  $('html, body').animate({
    scrollTop: $('.about').position().top
  }, 700);
})


function closeModal() {
  $(".modal").removeClass("show");
  $("body").removeClass("no-scroll");
}

$('.protfilio-btn ').click(function() {
  $('html, body').animate({
    scrollTop: $('.protfolio').position().top
  }, 700);
})

jQuery(document).ready(function() {
  $(window).scroll(function() {
    if ($('body').scrollTop() > 20) {
      $('.nav').addClass('white');
    } else {
      $('.nav').removeClass('white');
    }
  })
})