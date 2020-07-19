var userlist = [
  {
    fullName: " Nasdaq TransporTtation Ix ",
    value:40000,
  },
  {
    fullName: " S&P 600 Smallcap Index ",value:70000,
  },
  {
    fullName: "Nas Bbg US Reits Daq",value:30000,
  },
  {
    fullName: " Dow Jones Utility Avg ",value:10000,
  },
  {
    fullName: " Kbw Bamk Index ",value:100000,
  },
];

function build() {
  let template = _.template($("#list").html());
  let b = template(userlist);

  $(".body").html(template(userlist));
}
build();
