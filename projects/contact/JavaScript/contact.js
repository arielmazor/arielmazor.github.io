var index = -1;
var currIndex;
var _index;
var userlist = [];
var src = "../Images/first avatar.png";

/* -----------------------------------------------
build Modal
----------------------------------------------- */

function buildModal() {
	currIndex = -1;
	$(".modal").removeClass("hide");

	var template = document.querySelector("#template").innerHTML;
	var compiled_template = Handlebars.compile(template);
	var rendered = compiled_template({ src: src });
	document.querySelector(".profile-wrapper").innerHTML = rendered;

	$(".modal").addClass("show");
}

/* -----------------------------------------------
Build List
----------------------------------------------- */

function buildlist() {
	userlist = JSON.parse(localStorage.getItem("userlist")) || [];

	if (userlist == []) {
		$(".no-value").removeClass("hide");
		$(".no-value").addClass("show");
		$(".list").removeClass("show");
	} else {
		$(".no-value").removeClass("show");
		$(".no-value").addClass("hide");
		$(".list").addClass("show");
	}
	var template = document.querySelector("#template-list").innerHTML;
	var compiled_template = Handlebars.compile(template);
	var rendered = compiled_template({ userlist, index });
	document.querySelector(".list").innerHTML = rendered;
}

/* -----------------------------------------------
if have data
----------------------------------------------- */

function checkData() {
	var data = $(".name-input").val();

	if (data == undefined || data == "") {
		$(".save-buton").addClass("disable");
	} else {
		$(".save-buton").removeClass("disable");
	}
}

/* -----------------------------------------------
On Save
----------------------------------------------- */

function onSave() {
	let obj = {
		phoneNumber: $(".phone-input").val(),
		email: $(".email-input").val(),
		name: $(".firstname").val() + " " + $(".lastname").val(),
		src: src,
	};

	userlist.push(obj);
	localStorage.setItem("userlist", JSON.stringify(userlist));

	$(".list").addClass("show");
	closeModal(3);
	buildlist();
}

/* -----------------------------------------------
remove Row
----------------------------------------------- */
function removeRow() {
	userlist.splice(currIndex, 1);
	$(".modal").addClass("hide");
	$(".modal").removeClass("show");
	buildModal();
}
function imageSelect(i) {
	$(".image-select-wrapper").addClass("image-select-show");
	var srcArry = [
		"../Images/avatar.png",
		"../Images/avatar2.png",
		"../Images/avatar3.png",
		"../Images/avatar4.png",
	];
	src = srcArry[i - 1];

	if (i == undefined) {
	} else {
		buildModal();
		closeModal(1);
	}
}

/* -----------------------------------------------
CloseModal
----------------------------------------------- */
function closeModal(num) {
	if (num == 0) {
		$(".modal").removeClass("show");
		$(".modal").addClass("hide");
		data = "";
	}
	if (num == 3) {
		$(".modal").removeClass("show");
		$(".modal").addClass("hide");
		$(".section").addClass("hide");
	}
	if (num == 1) {
		$(".image-select-wrapper").removeClass("image-select-show");
	}
	num = 0;
}

buildlist();
