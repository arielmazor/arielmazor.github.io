var isPos = false;
var deta = [
  {
    StockName: " Nasdaq TransporTtation Ix ",
    value: 40000,
    change: "",
    class: "",
  },
  {
    StockName: " S&P 600 Smallcap Index ",
    value: 70000,
    change: "",
    class: "",
  },
  {
    StockName: "Nas Bbg US Reits Daq",
    value: 30000,
    change: "",
    class: "",
  },
  {
    StockName: " Dow Jones Utility Avg ",
    value: 10000,
    change: "",
    class: "",
  },
  {
    StockName: " Kbw Bamk Index ",
    value: 100000,
    change: "",
    class: "",
  },
];

function build() {
  let template = _.template($("#list").html());
  let b = template(deta);

  $(".body").html(template(deta));
}

function change() {
  var OldValue = deta[2].value;
  isPos = !isPos





  if (isPos) {
    deta[2].class = "green change-wrapper";
    deta[2].value = deta[2].value * 1.005;
  } else {
    deta[2].class = "red change-wrapper";
    deta[2].value = deta[2].value * 0.995;
  }

  deta[2].change = 0.005;
  build();
}
change();
change();

