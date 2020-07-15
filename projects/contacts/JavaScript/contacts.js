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
  }else{
    let template = _.template($("#contant-script").html());
    $(".list-wrapper").html(template(userlist)).addClass("show2");
  }
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

  if (currIndex === -1) {
    userlist.push(obj);
  }

  $(".row-wrapper").addClass("show2");

  closeModal();
  build();
}

// ------------------------------------------
// removeRow
// ------------------------------------------

function _remove() {
  userlist.splice(currIndex, 1);

  $(".list-wrapper").removeClass("show2");
  build();
}

// ------------------------------------------
// showFirsModal
// ------------------------------------------

function showModal(index) {
  currIndex = index;
  let template = _.template($("#contant").html());
  $(".list-wrapper").html(template(userlist[currIndex]));

  $(".modal").addClass("show1");
}

// -------------------------------------------
// editRow
// -------------------------------------------

function editRow() {

}

// -------------------------------------------
// ShowSecondMolal (for add row)
// ------------------------------------------

function showNewModal(index) {
  currIndex = -1;
  let template = _.template($("#contant").html());
  let newObj = {
    src:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
    fullName: "",
    address: "",
    gender: "",
    phoneNumber: "",
    delete: "",
    edit: "",
  };

  $(".modal .content .body").html(template(newObj));
  $(".modal").addClass("show1");
}
// -------------------------------------------
// Show3Molal (for add image)
// ------------------------------------------

function show3Modal(index) {
  
  $(".image-list-wrapper").addClass("show1");
}

// ------------------------------------------
// closeTowOfModal
// ------------------------------------------

function closeModal() {
  $(".modal").removeClass("show1");
}

build();
