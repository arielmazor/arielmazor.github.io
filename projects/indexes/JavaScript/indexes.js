var isPos = false;
var dataHistory = {
  "1": [],
  "2": [],
  "3": [],
  "4": [],
  "5": [],
};
var data = [
  {
    id: "1",
    StockName: " Nasdaq TransporTtation Ix ",
    value: 40000,
    change: "",
    class: "",
  },
  {
    id: "2",
    StockName: " S&P 600 Smallcap Index ",
    value: 70000,
    change: "",
    class: "",
  },
  {
    id: "3",
    StockName: "Nas Bbg US Reits Daq",
    value: 30000,
    change: "",
    class: "",
  },
  {
    id: "4",
    StockName: " Dow Jones Utility Avg ",
    value: 10000,
    change: "",
    class: "",
  },
  {
    id: "5",
    StockName: " Kbw Bamk Index ",
    value: 100000,
    change: "",
    class: "",
  },
];
var x = 0;
var mode = 1;
var historyInfo;

// ------------------------------------------
// showModal
// ------------------------------------------

function showModal(index) {
  var clsName = "show-chart" ;
  $(".modal").addClass(clsName);

  let template = _.template($("#modal-contant").html());
  historyInfo = dataHistory[index];

  $(".modal").html(template(historyInfo));
  $(".modal").addClass("show");
}

// ------------------------------------------
// Main
// ------------------------------------------

function main() {
  change();

  setTimeout(function () {
    if (x == 0) {
      main();
    }
  }, 750);
}

function build() {
  let template = _.template($("#list").html());
  let b = template(data);

  $(".table-wrapper .body").html(template(data));
}

// ------------------------------------------
// Change
// ------------------------------------------

function change() {
  var index = Math.floor(Math.random() * 5) + 0;
  var increase = Math.round(Math.random() * 0.005 * 10000) / 10000;
  isPos = !isPos;
  if (isPos) {
    data[index].class = "green change-wrapper";
    data[index].value = data[index].value * (1 + increase);
  } else {
    data[index].class = "red change-wrapper";
    data[index].value = data[index].value * (1 - increase);
  }

  data[index].change = increase;

  var id = data[index].id;
  dataHistory[id].push({
    val: data[index].value,
    change: data[index].change,
  });
  dataHistory.splice;
  build();
}

function onTableClick(){
  $(".modal").removeClass("show-tbl");
  $(".modal").addClass("show-chart");
}

function onChartClick(){
  $(".modal").removeClass("show-chart");
  $(".modal").addClass("show-tbl");
}



// ------------------------------------------
// calls
// ------------------------------------------
main();
