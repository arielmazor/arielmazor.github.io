

function _scrollTo(rowTop) {
    $("html, body").animate({
        scrollTop: rowTop
    }, "slow");
}

$(document).scroll(() => {
    console.log($(document).scrollTop());

})


$(document).ready(() => {
    console.log($(document).scrollTop());
})