var userlist = [3, 2, 1]

function buildNextPage(clas) {
    let template = _.template($("#bio").html());
    $(".container .wrapper").html(template(userlist))
    if (clas == 0) {
        $(".first-page").addClass("show");
        $(".second-page").removeClass("show");
    }
    if (clas == 1) {
        $(".second-page").addClass("show");
        $(".first-page").removeClass("show");
    }
}
buildNextPage(0);