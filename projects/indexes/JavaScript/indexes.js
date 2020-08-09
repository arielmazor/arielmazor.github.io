var isPos = false;
var dataHistory = {
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
};
var data = [{
        id: "0",
        StockName: " Nasdaq TransporTtation Ix ",
        value: 40000,
        change: "",
        class: "",
    },
    {
        id: "1",
        StockName: " S&P 600 Smallcap Index ",
        value: 70000,
        change: "",
        class: "",
    },
    {
        id: "2",
        StockName: "Nas Bbg US Reits Daq",
        value: 30000,
        change: "",
        class: "",
    },
    {
        id: "3",
        StockName: " Dow Jones Utility Avg ",
        value: 10000,
        change: "",
        class: "",
    },
    {
        id: "4",
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
    var clsName = "show-chart";
    $(".modal").addClass(clsName);
    historyInfo = dataHistory[index];
    let template = _.template($("#modal-contant").html());

    $(".modal .wrapper").html(template(historyInfo));
    $(".modal").addClass("show");

    var labels = [];
    var values = [];
    var _name = data[index].StockName;

    historyInfo.forEach((item) => {
        labels.push(item.time);
        values.push(item.val);
    });

    var speedData = {
        labels: labels,
        datasets: [{
            label: _name,
            data: values,
            lineTension: 0.25,
            fill: false,
            borderColor: "orange",
            backgroundColor: "transparent",
            pointBorderColor: "orange",
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            borderDash: [5, 5],
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: "rectRounded",
        }, ],
    };

    var chartOptions = {
        legend: {
            display: true,
            position: "top",
            labels: {
                boxWidth: 80,
                fontColor: "black",
            },
        },
        scales: {
            xAxes: [{
                type: "time",
                time: {
                    unit: "hour",
                    unitStepSize: 0.5,
                    round: "hour",
                    tooltipFormat: "h:mm:ss a",
                    displayFormats: {
                        hour: "MMM D, h:mm A",
                    },
                },
            }, ],
            yAxes: [{
                gridLines: {
                    color: "black",
                    borderDash: [2, 5],
                },
                scaleLabel: {
                    display: true,
                    labelString: "Speed in Miles per Hour",
                    fontColor: "green",
                },
            }, ],
        },
    };

    var lineChart = new Chart("chart", {
        type: "line",
        data: speedData,
        // options: chartOptions
    });
}
// ------------------------------------------
// closeModal
// ------------------------------------------
function closeModal() {
    $(".modal").removeClass("show")
}
// ------------------------------------------
// Main
// ------------------------------------------

function main(count) {
    change();
    setTimeout(function() {
        main();
    }, 1150);
}

function build() {
    if (x == 0) {
        let template = _.template($("#list").html());
        let b = template(data);
        $(".table-wrapper .body").html(template(data));
    }
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
    var _id;
    _id = data[index].id;

    dataHistory[_id].push({
        val: data[index].value,
        change: data[index].change,
        time: moment().format("mm:ss"),
    });

    if (dataHistory[_id].length > 3) {
        dataHistory[_id].splice(dataHistory[_id].length - 3);
    }
    build();
}

function onTableClick() {
    $(".modal").removeClass("show-tbl");
    $(".modal").addClass("show-chart");
}

function onChartClick() {
    $(".modal").removeClass("show-chart");
    $(".modal").addClass("show-tbl");
}

// ------------------------------------------
// calls
// ------------------------------------------
main();