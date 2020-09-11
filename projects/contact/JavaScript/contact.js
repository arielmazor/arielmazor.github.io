var src = "../Images/first avatar.png";;
function buildModal() {
    $(".modal").removeClass("hide")
    $(".modal").addClass("show")





    var template = document.querySelector('#template').innerHTML;
    var compiled_template = Handlebars.compile(template);
    var rendered = compiled_template({ src: src });
    document.querySelector('.profile-wrapper').innerHTML = rendered
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
function imageSelect(i) {
    $(".image-select-wrapper").addClass("image-select-show")
    var srcArry = ["../Images/avatar.png", "../Images/avatar2.png", "../Images/avatar3.png", "../Images/avatar4.png"]
    src = srcArry[i - 1]

    if (i == undefined) {

    } else {
        buildModal();
        closeModal(1);
    }
}
function closeModal(num) {
    if (num == 0) {
        $(".modal").removeClass("show")
        $(".modal").addClass("hide")
        data = "";
    } else {
        $(".image-select-wrapper").removeClass("image-select-show")
    }
    num = 0;
}
