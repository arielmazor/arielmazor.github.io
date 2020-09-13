var index = -1;
var currIndex;
var userlist = [];
var src = "../Images/first avatar.png";;
function buildModal() {
	currIndex = -1
	$(".modal").removeClass("hide")
	$(".modal").addClass("show")





	var template = document.querySelector('#template').innerHTML;
	var compiled_template = Handlebars.compile(template);
	var rendered = compiled_template({ src: src });
	document.querySelector('.profile-wrapper').innerHTML = rendered
}

function buildlist() {
	var template = document.querySelector('#template-list').innerHTML;
	var compiled_template = Handlebars.compile(template);
	var rendered = compiled_template({ userlist, index });
	document.querySelector('.list').innerHTML = rendered
}
function checkData() {
	var data = [];
	data += $(".name-input").val()

	if (data == undefined || data == "") {
		$(".save-buton").addClass("disable")
	} else {
		$(".save-buton").removeClass("disable")
	}
}

function onSave() {
	var fullname = "";
	fullname = $(".firstname").val();
	fullname += " " + $(".lastname").val();
	index += 1;
	let obj =
		currIndex == -1
			? {
				delete: "../Images/delete.png",
				edit: "../Images/edit.png",
				src: "../Images/avatar.png",
			}
			: userlist[currIndex];

	obj.phoneNumber = $(".phone-input").val();
	obj.email = $(".email-input").val();
	obj.name = fullname;
	obj.src = src;
	console.log(fullname)
	if (currIndex === -1) {
		userlist.push(obj);
	}
	$(".list").addClass("show");


	closeModal(3);
	buildlist();
}

function imageSelect(i) {

	$(".image-select-wrapper").addClass("image-select-show")
	var srcArry = ["../Images/avatar.png", "../Images/avatar2.png", "../Images/avatar3.png", "../Images/avatar4.png"]
	src = srcArry[i - 1]

	if (i == undefined) {

	} else {
		buildModal();
		closeModal(1);
	}
}
function closeModal(num) {
	if (num == 0) {
		$(".modal").removeClass("show")
		$(".modal").addClass("hide")
		data = "";
	}
	if (num == 3) {
		$(".modal").removeClass("show")
		$(".modal").addClass("hide")
		$(".section").addClass("hide")
	}
	if (num == 1) {
		$(".image-select-wrapper").removeClass("image-select-show")
	}
	num = 0;
}
