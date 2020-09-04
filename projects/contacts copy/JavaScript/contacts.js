var Phonenumber = $("#phonenumber").val();
var currIndex;
var userlist = [];

// ------------------------------------------
// buildModal
// ------------------------------------------

function build() {
  $(".wrapper").removeClass("show2");

  if (userlist.length == 0) {
    $(".new-wrapper").addClass("show2");
  } else {
    let template = _.template($("#contant-script").html());
    $(".list").html(template(userlist)).addClass("show2");
  }
}
// -------------------------------------------
// Show3Molal (for add image)
// ------------------------------------------

function show3Modal(index) {
  $(".image-list-wrapper").addClass("show1");
}

// ------------------------------------------
// imageNum
// ------------------------------------------
var imgNum = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png";
function imageNum(index) {
  if (index == 1) {
    imgNum = "../Images/avatar2.png";
  }
  if (index == 2) {
    imgNum = "../Images/avatar3.png";
  }
  if (index == 3) {
    imgNum = "../Images/avatar3.png";
  }
  if (index == 4) {
    imgNum = "../Images/avatar2.png";
  }

  $(".uploud-img img.icon")[0].src = imgNum;
  $(".image-list-wrapper").removeClass("show1");
}
// -------------------------------------------
// ShowSecondMolal (for add row)
// ------------------------------------------
let newObj;
function showNewModal(index) {
  currIndex = -1;
  let template = _.template($("#contant").html());
  newObj = {
    src:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png ",
    fullName: "",
    address: "",
    gender: "",
    phoneNumber: "",
  };

  $(".modal .content .body").html(template(newObj));
  $(".modal").addClass("show1");
}

// ------------------------------------------
// onSave
// ------------------------------------------

function onSave() {
  let obj =
    currIndex == -1
      ? {
          delete: "../Images/delete.png",
          edit: "../Images/edit.png",
          src: "../Images/avatar.png",
        }
      : userlist[currIndex];

  obj.phoneNumber = $("#Phonenumber").val();
  obj.fullName = $("#name").val();
  obj.address = $("#address").val();
  obj.src = imgNum;

  if (currIndex === -1) {
    userlist.push(obj);
  }
  $(".btn-plus").addClass("show2");
  $(".contact-list-wrapper").addClass("show2");


  closeModal();
  build();
}

// ------------------------------------------
// removeRow
// ------------------------------------------

function _remove() {
  userlist.splice(currIndex, 1);
  $(".btn-plus").removeClass("show2");
  $(".contact-list-wrapper").removeClass("show2");
  build();
}

// ------------------------------------------
// showFirsModal
// ------------------------------------------

function showModal(index) {
  currIndex = index;
  let template = _.template($("#contant").html());
  $(".list").html(template(userlist[currIndex]));

  $(".modal").addClass("show1");
}

// ------------------------------------------
// closeTowOfModal
// ------------------------------------------

function closeModal() {
  $(".modal").removeClass("show1");
  $(".image-list-wrapper").removeClass("show2");
}

build();
