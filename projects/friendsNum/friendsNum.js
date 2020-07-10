function getDevivde() {
  var Num1 = parseInt($(".num1 .Num-input").val());
  var Num2 = parseInt($(".num2 .Num-input").val());
  var resulte1 = 0;
  var resulte2 = 0;
  if(!_.isFinite(Num1)){
    $(".input-wrapper.num1").addClass("red");
  }else{
    $(".input-wrapper.num1").removeClass("red");
  }
  if(!_.isFinite(Num2)){
    $(".input-wrapper.num2").addClass("red");
  }else{
    $(".input-wrapper.num2").removeClass("red");
  }
  for (var i = 1; i < Num1; i++) {
    if (Num1 % i == 0) {
      resulte1 += i;
    }
  }
  for (var i = 1; i < Num2; i++) {
    if (Num2 % i == 0) {
      resulte2 += i;
    }
  }
  // if (Num1 > 0) {
  //   if (Num2 > 0) {
  //     if (Num1 == Num2 && Num1) {
  //       alert(`the number: ${Num1} is friend number to number: ${Num2}`);
  //     } else {
  //       alert(`the number: ${Num1} is not friend number to number: ${Num2}`);
  //     }
  //   }
  // }
}
