var userlist = [3, 2, 1]
function createPage() {
  $(".c1").addClass("hide");
  $(".c2").addClass("hide");
  $(".c3").addClass("_show")
}
function nextPage() {
  $(".c1").addClass("hide");
  $(".c2").addClass("_show")
  $(".c1").removeClass("show");
  $(".c2").removeClass("hide");
}

function prevPage() {
  $(".c1").removeClass("hide");
  $(".c1").addClass("_show")

  $(".c2").removeClass("_show");
  $(".c2").addClass("hide");
}

function usernameCheck() {
  var input1 = $(".input1").val();
  var input2 = $(".input2").val();
  if (input1 === "" || input2 === "") {
    $(".button-next").addClass('disable');
  } else {
    $(".button-next").removeClass('disable');
  }
}

function emailAndPasswordCheck() {

  var input3 = $(".input3").val();
  var input4 = $(".input4").val();
  if (input3 === "" || input4 === "") {
    $("._button-next").addClass('disable');
  } else {
    $("._button-next").removeClass('disable');
  }
}
function openSite() {
  window.open("https://arielmazor.github.io/");
}