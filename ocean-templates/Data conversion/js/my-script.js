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