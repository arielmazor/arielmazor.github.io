
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
	var rendered = compiled_template({ src: userlist.src, name: userlist.name, phoneNumber: userlist.phoneNumber });
	document.querySelector('.list').innerHTML = rendered
}
function checkData() {
	var data = [];
	data += $(".data-input").val()

	if (data == undefined || data == "") {
		$(".save-buton").addClass("disable")
	} else {
		$(".save-buton").removeClass("disable")
	}
}

function onSave() {
	let obj =
		currIndex == -1
			? {
				delete: "../Images/delete.png",
				edit: "../Images/edit.png",
				src: "../Images/avatar.png",
			}
			: userlist[currIndex];

	obj.phoneNumber = $(".email-input").val();
	obj.fullName = $(".name").val();
	obj.src = src;

	if (currIndex === -1) {
		userlist.push(obj);
	}
	$(".list").addClass("show");


	closeModal(0);
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
	if (3) {
		$(".modal").removeClass("show")
		$(".modal").addClass("hide")
		$(".section").addClass("hide")
	}
	else {
		$(".image-select-wrapper").removeClass("image-select-show")
	}
	num = 0;
}
