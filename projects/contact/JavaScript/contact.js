function buildModal() {
    $(".modal").removeClass("hide")
    $(".modal").addClass("show")

    var template = document.querySelector('#template').innerHTML;
    var compiled_template = Handlebars.compile(template);
    var rendered = compiled_template({ name: "Luke" });
    document.querySelector('.modal-wrapper').innerHTML = rendered;
}

function closeModal() {
    $(".modal").removeClass("show")
    $(".modal").addClass("hide")
}