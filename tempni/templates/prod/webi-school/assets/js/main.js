

function suggest(num) {
    $("._star").removeClass("active");
    $(`.star-wrapper .star${num}`).addClass("active");
}

$(document).on('scroll', function () {

    if ($(window).scrollTop() >= $('.about-page').position().top - 1000) {
        $(".img-leng img").addClass("fade-in-up");
    }
})

$(document).ready(function () {
    $(`.star-wrapper .star1`).addClass("active");
    if ($(window).scrollTop() >= $('.about-page').position().top - 1000) {
        $(".img-leng img").addClass("fade-in-up");
    }
});