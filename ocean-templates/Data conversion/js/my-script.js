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
/* -----------------------------------------------
exampleActive
----------------------------------------------- */
$('.ask-icon-wrapper ').click(function() {
  $('.width ,.input2').animate({
    height: '92px'
  }, 500);
  $(".width").focus();
  document.getElementById("input2").blur();
  $(".none").css("display", "none")
  $(".width").css("pointer-events", "none")
  setTimeout(function() {
    $(".input-wrapper .help-wrapper").css("opacity", "1")
    $(".input-wrapper .help-wrapper").css("width", "100%")
  }, 200);


})
jQuery(document).ready(function() {
  nextStep(1);
})