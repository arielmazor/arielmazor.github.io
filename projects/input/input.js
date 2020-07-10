function vallidate(len) {
  var str =""
  if (len > 20) {
    
    document.querySelector(".aror").innerHTML = "max char";
    str = $(".input").val()
    str = str.substring(0,21)
    len = $(".input").val(str)
    document.querySelector('.input').len
    $('.aror').addClass('show')
  } else {
    document.querySelector(".counter1").innerHTML = len;
    $('.aror').removeClass('show')
  }

}

$(".input").on("input", function (e) {
  var input = $(".input");
  vallidate(input.val().length);
});
