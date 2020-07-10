var obj = [
  {
    src: "men.png",
    fullName: "Yafa mazor",
    adrres: "yocneam elite",
    gender: "male",
  },
  {
    src:
      "https://s.yimg.com/ny/api/res/1.2/tKkCUB5xgXhjeL1CzWIfKQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/people_218/fa7c9bfd3d17b7170efd15f840684e0f",
    fullName: "Bh",
    adrres: "cfar saba",
    gender: "fimale",
  },
  {
    src:
      "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",
    fullName: "mm",
    adrres: "criat motzkin",
    gender: "male",
  },
  {
    src:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    fullName: "Rm",
    adrres: "harzelia",
    gender: "fimale",
  },
];

function build() {
  let template = _.template($("#script-list").html());
  $(".id-wrapper").html(template(obj));
}

function showModal(index) {

  let template = _.template($("#contant-script").html());
  $(".modal .content .info-wrapper").html(template(obj[index]));

  $(".modal").addClass("show");
  $(".content").addClass("show");
}

function closeModal() {
  $(".modal").removeClass("show");
}

build();
