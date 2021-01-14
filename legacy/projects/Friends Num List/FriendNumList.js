var dividersSumArr = [];

var results = [];

/* -----------------------------------------------
        changeNum
----------------------------------------------- */
function shearchFriendsNumbers() {
  var num1 = parseInt($(".Num-input").val());
  var num2 = parseInt($(".Num-input").val());
  setDividersSumArr(num1, num2);

  let fnTamplate = _.template($("#friendsNumberList").html());
  $(".list-wrapper").html(fnTamplate(results));
}

/* -----------------------------------------------
       updateresult
----------------------------------------------- */

function updateresult(n1, n2) {
  results.push({
    num1: n1,
    num2: n2,
  });
}

/* -----------------------------------------------
        findDuo
----------------------------------------------- */

function findDuo(num) {
  var t;
  for (var i = 1; i <= num; i++) {
    t = dividersSumArr[i];

    if (t > i && dividersSumArr[t] == i) {
      updateresult(t, i, num);
    }
  }
}
/* -----------------------------------------------
        GetDevide
----------------------------------------------- */

function getDevidersSum(num) {
  var deviderSum = 0;
  for (var i = 1; i < num; i++) {
    if (num % i == 0) {
      deviderSum += i;
    }
  }
  return deviderSum;
}
/* -----------------------------------------------
        getNums
----------------------------------------------- */

function setDividersSumArr(num) {
  for (var i = 1; i <= num; i++) {
    dividersSumArr[i] = getDevidersSum(i);
  }
  findDuo(num);
}
