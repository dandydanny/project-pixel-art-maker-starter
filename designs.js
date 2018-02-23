// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {

	console.log("makeGridc called with arguments:" + x + " " + y);
	for(var rows = 0; rows < y; rows++){
		console.log('make rows');
		for(var cols = 0; cols < x; cols++){
			console.log('make cols');
		}
	}


}

var color;
// After submit, prevent default, but grab dimension value

// Call makeGrid with dimension value, which populates DOM with DIV's
// Use tables to make cells and rows: square pixels

// Use jQuery to .toggleClass .on('click')

// ???

// Profit! I think...

$('#sizePicker').on('submit', function(){
	var x, y;
	color = $('#colorPicker').val();
	y = $('#inputHeight').val();
	x = $('#inputWidth').val();
	console.log('Clicked - vaues: ' + x + ', ' + y + ', ' + color);
	makeGrid(x,y);
	return false;	// preventDefault and stopPropagation
})