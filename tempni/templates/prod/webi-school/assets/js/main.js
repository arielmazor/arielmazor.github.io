function flip(i) {
    $(`.flip-front`).animate({
        opacity: 0,
    }, 100);
    $(`#item${i}.flip-back`).animate({
        opacity: 1,
    }, 100);
    $(`#item${i}.flip-back`).css("transform", "rotateY(" + 360 + "deg)");
    $(`.flip-front`).css("transform", "rotateY(" + 360 + "deg)");

}
function flipBack(i) {
    $(`#item${i}.flip-back`).animate({
        opacity: 0,
    }, 100);
    $(`.flip-front`).animate({
        opacity: 1,
    }, 100);
    $(`#item${i}.flip-back`).css("transform", "rotateY(" + 263 + "deg)");
    $(`.flip-front`).css("transform", "rotateY(" + 360 + "deg)");

}
function suggest(num, item) {
    $(`.sugg - wrap div`).removeClass('_active');
    $(`.pf - wrap.i`).removeClass('_active');
    $(`.sugg - wrap.i${num}`).addClass('_active');
    $(`.pf - wrap.${item}`).addClass('_active');
    $("._star").removeClass("active");
    $(`.star - wrapper.star${num}`).addClass("active");
}

// $(document).on('scroll', function () {

//     if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
//         $(".img-leng img").addClass("fade-in-up");
//     }
// })

$(document).ready(function () {
    $(`.sugg - wrap.i1`).addClass('_active');
    $(`.pf - wrap.i1`).addClass('_active');
    $(`.star - wrapper.star1`).addClass("active");
    // if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
    //     $(".img-leng img").addClass("fade-in-up");
    // }
});