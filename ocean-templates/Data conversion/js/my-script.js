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




jQuery(document).ready(function() {
  nextStep(1);
})