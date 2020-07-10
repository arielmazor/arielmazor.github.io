var imgDate = [
  {
    src: "file:///C:/Users/ariel/Downloads/aaa.jpg",
    header: "join as",
    description: " moon wallpeper",
  },
  {
    src:
      "https://get.pxhere.com/photo/horizon-light-cloud-sky-sunrise-sunset-skyline-night-sunlight-morning-dawn-cityscape-dusk-evening-weather-darkness-2426.jpg",
    header: "snow",
    description: "evning on snowy area",
  },
  {
    src:
      "https://get.pxhere.com/photo/4k-wallpaper-autumn-autumn-colors-autumn-colours-clouds-cloudy-desktop-wallpaper-environment-fall-forest-hd-wallpaper-landscape-mountains-nature-outdoors-scenery-scenic-season-sky-trees-valley-wilderness-woods-1561761.jpg",
    header: "Mountain",
    description: "evning on Mountains area",
  },
];
function show(i) {
  var bigImg = `<img src ="${imgDate[i].src}" class = "bigImg"></img>`;
  document.querySelector(".header").innerHTML = imgDate[i].header;
  document.querySelector(
    ".description"
  ).innerHTML = `<div class = "text"> ${imgDate[i].description}</div>`;
  document.querySelector(".img").innerHTML = bigImg;
}

function buildimg() {
  var img = "";

  for (var i = 0; i < imgDate.length; i++) {
    img += `<img class = "galeryImg" onclick="show(${i})" src = "${imgDate[i].src}"</img>`;
  }
  document.querySelector(".galery_menu").innerHTML = img;
}
buildimg();
