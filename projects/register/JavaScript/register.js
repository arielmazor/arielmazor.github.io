var userlist = [3, 2, 1]
var input1;
var input2;
function buildNextPage() {
	input1 = $(".input1").val();
	input2 = $(".input2").val();
	{
		$(".c1").addClass("close");
		$(".c2").addClass("show")
	}
}


function butomCheck() {
	var empty = false;
	if (input1 == '') {

		empty = true;

	}
	if (empty == true) {
		$(".button-next").addClass('empty');
		return;
	} else {
		$(".button-next").removeClass('empty');
	}
}
