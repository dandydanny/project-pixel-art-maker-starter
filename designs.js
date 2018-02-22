// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}


// After submit, prevent default, but grab dimension value

// Call makeGrid with dimension value, which populates DOM with DIV's
// Use tables to make cells and rows: square pixels

// Use jQuery to .toggleClass .on('click')

// ???

// Profit! I think...

$('#sizePicker').on('submit', function(){
	console.log('clicked');
	return false;	// preventDefault and stopPropagation
})