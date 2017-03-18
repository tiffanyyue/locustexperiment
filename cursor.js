var Cursor = function() {

	var $cursor = $('<div>');
	$cursor.addClass('cursor');
	$('#page').append($cursor);
	
	$('#page').mousemove(function(event) {
		$cursor.css('left', event.pageX);
		$cursor.css('top', event.pageY);
	})
}