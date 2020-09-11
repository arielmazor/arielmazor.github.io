function buildModal() {
    $(".modal").removeClass("hide")
    $(".modal").addClass("show")


}
function saveData() {
    var data = [];
    data += $(".data-input").val()

    if (data == undefined || data == "") {
        $(".save-buton").addClass("disable")
    } else {
        $(".save-buton").removeClass("disable")
    }
}
function imageSelect() {
    $(".image-select-wrapper").addClass("image-select-show")
}
function closeModal(num) {
    if (num == 0) {
        $(".modal").removeClass("show")
        $(".modal").addClass("hide")
    } else {
        $(".image-select-wrapper").removeClass("image-select-show")
    }
    num = 0;
}
// var template = document.querySelector('#template').innerHTML;
// var compiled_template = Handlebars.compile(template);
// var rendered = compiled_template({ name: "Luke" });
// document.querySelector('.modal-wrapper').innerHTML = rendered