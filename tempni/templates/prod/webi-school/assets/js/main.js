function suggest(num, item) {
    $(`.sugg-wrap div`).removeClass('_active');
    $(`.pf-wrap .i`).removeClass('_active');
    $(`.sugg-wrap .i${num}`).addClass('_active');
    $(`.pf-wrap .${item}`).addClass('_active');
    $("._star").removeClass("active");
    $(`.star-wrapper .star${num}`).addClass("active");
}

function openDes(i) {
    // const isOpen = $(`#i${i}`).hasClass(`open`)
    // if (isOpen) {
    //     $(`.item`).removeClass("open")
    // } else {
    //     $(`.item`).removeClass("open")
    //     $(`#i${i}`).addClass("open")
    // }

    $(".what-i-do .item").on("click", function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).find(".content").slideUp(350);
        } else {
            $(".what-i-do .item").removeClass("open");
            $("what-i-do .item .content").slideUp(350);
            $(this).addClass("open");
            $(this).find(".content").slideDown(350);
        }
    });
}


$(document).on('scroll', function () {

    if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
        $(".img-leng img").addClass("fade-in-up");
    }
})

$(document).ready(function () {
    $(`.sugg-wrap .i1`).addClass('_active');
    $(`.pf-wrap .i1`).addClass('_active');
    $(`.star-wrapper .star1`).addClass("active");
    if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
        $(".img-leng img").addClass("fade-in-up");
    }
});