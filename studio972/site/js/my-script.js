var arry = [];

function showModal(filter, id) {
  if ($(".cd-filters .filter a").hasClass("selected")) {
    if (filter == 1) {
      $(".modal").addClass("design");
      $(".modal").removeClass("apps");

    } else if (filter == 2) {
      $(".modal").addClass("apps");
      $(".modal").removeClass("design");
    }
  } else {
    $(".modal").addClass("show");
    $(".modal").removeClass("apps");
    $(".modal").removeClass("design");
    $(".modal .wrapper .image-wrapper").addClass("all");
  }
  $(".modal").addClass("show");
  $("body").addClass("no-scroll");

  setTimeout(function() {
    $('.modal').animate({
      scrollTop: $(`#${id}`).position().top
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