

function suggest(num, item) {
    $(`.sugg-wrap div`).removeClass('_active');
    $(`.pf-wrap .i`).removeClass('_active');
    $(`.sugg-wrap .i${num}`).addClass('_active');
    $(`.pf-wrap .${item}`).addClass('_active');
    $("._star").removeClass("active");
    $(`.star-wrapper .star${num}`).addClass("active");
}
function star(item) {

}

$(document).on('scroll', function () {

    if ($(window).scrollTop() >= $('.about-page').position().top - 1000) {
        $(".img-leng img").addClass("fade-in-up");
    }
})

$(document).ready(function () {
    $(`.sugg-wrap .i1`).addClass('_active');
    $(`.pf-wrap .i1`).addClass('_active');
    $(`.star-wrapper .star1`).addClass("active");
    if ($(window).scrollTop() >= $('.about-page').position().top - 1000) {
        $(".img-leng img").addClass("fade-in-up");
    }
});