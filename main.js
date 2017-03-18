$(document).ready(function() {
	var pixelCursor = new Cursor();
});


$('.pic').mouseenter(
	function () {
		console.log('hello');
		if (!$(this).get(0).classList[1].includes('0')) {
			var newPic = $(this).get(0).classList[1] + '0';
			$(this).addClass(newPic);
			$(this).removeClass($(this).get(0).classList[1]);
		}	
	}
);





