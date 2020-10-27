var _templateData = {
  name: "ariel1",
  title: "ariel2",
};

/* -----------------------------------------------
nextStep
----------------------------------------------- */
function nextStep(stepNum) {
  var _id = `step${stepNum}`
  $(".step .step-title").removeClass("active");
  $(".step .wrapper").removeClass("active");
  $(`#${_id} .step-title`).addClass("active");
  $(`#${_id} .wrapper`).addClass("active");
  console.log(_id)

}

function showPreview() {
  _templateData.name = $("#input1").val();
  _templateData.title = $("#input2").val();

  var compiled_template = Handlebars.compile(templateStr);
  var html = compiled_template(_templateData);

  var ifrm = document.querySelector("#template-iframe")
  let doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;

  doc.open();
  doc.write(html);
  doc.close();
}



function valueCheck() {
  if (!$("#input1").val() == "") {
    if (!$("#input2").val() == "") {
      $("._btn").removeClass("disable")
    }
  } else {
    $("._btn").addClass("disable")
  }
}

jQuery(document).ready(function() {
  nextStep(1);
})