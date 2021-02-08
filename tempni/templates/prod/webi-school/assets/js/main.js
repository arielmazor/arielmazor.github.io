function initWhatIdoAccordion() {
    $(".outer-wrap .item").on("click", function () {
        $('.outer-wrap .item').find(".content").slideUp(350);

        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).find(".content").slideUp(350);
        } else {
            $(".outer-wrap .item").removeClass("open");
            $(this).find(".content").slideDown(350);
            $(this).addClass("open");
            $(this).find(".content").slideDown(350);
        }
    });
}

function suggest(num, item) {
    $(`.sugg-wrap div`).removeClass('_active');
    $(`.pf-wrap .i`).removeClass('_active');
    $(`.sugg-wrap .i${num}`).addClass('_active');
    $(`.pf-wrap .${item}`).addClass('_active');
    $("._star").removeClass("active");
    $(`.star-wrapper .star${num}`).addClass("active");
}

// $(document).on('scroll', function () {

//     if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
//         $(".img-leng img").addClass("fade-in-up");
//     }
// })

$(document).ready(function () {
    initWhatIdoAccordion();
    $(`.sugg-wrap .i1`).addClass('_active');
    $(`.pf-wrap .i1`).addClass('_active');
    $(`.star-wrapper .star1`).addClass("active");
    // if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
    //     $(".img-leng img").addClass("fade-in-up");
    // }
});