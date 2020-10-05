function showModal() {
  $(".modal").addClass("show");
  $("body").addClass("no-scroll");
}

function closeModal() {
  $(".modal").removeClass("show");
  $("body").removeClass("no-scroll");
}

$('.protfilio-btn ').click(function() {
  $('html, body').animate({
    scrollTop: $('.protfolio').position(200).top
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