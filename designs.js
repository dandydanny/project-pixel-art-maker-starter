// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {

	console.log("makeGridc called with arguments:" + x + " " + y);

}


// After submit, prevent default, but grab dimension value

// Call makeGrid with dimension value, which populates DOM with DIV's
// Use tables to make cells and rows: square pixels

// Use jQuery to .toggleClass .on('click')

// ???

// Profit! I think...

$('#sizePicker').on('submit', function(){
	var x, y;
	y = $('#inputHeight').val();
	x = $('#inputWidth').val();
	console.log('clicked - xy values: ' + x + ', ' + y);
	makeGrid(x,y);
	return false;	// preventDefault and stopPropagation
})