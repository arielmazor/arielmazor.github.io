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
function main(){
  change();

  setTimeout(function(){
    main()
  }, 150)
}
function build() {
  let template = _.template($("#list").html());
  let b = template(deta);

  $(".body").html(template(deta));
}

function change() {
  var index = Math.floor(Math.random() * 5) + 0;
  isPos = !isPos

  if (isPos) {
    deta[index].class = "green change-wrapper";
    deta[index].value = deta[index].value * 1.005;
  } else {
    deta[index].class = "red change-wrapper";
    deta[index].value = deta[index].value * 0.995;
  }

  deta[index].change = 0.005;
  build();
}
main();

