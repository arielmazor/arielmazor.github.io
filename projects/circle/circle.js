function display(r) {
  var p = 3.14;
  var area = r * r * p;
  var Circled = r * 2 * p;
  document.querySelector(".circled").innerHTML = Circled;
  document.querySelector(".area").innerHTML = area;
}
function paint(r) {


  var double = r * 2;
  var hight = double + "px";
  var width = double + "px";

  $(".circle").css({ height: hight, width: width });
}
function build() {
  var radius = parseInt($(".input").val());

  paint(radius);
  display(radius);
}
