const submit = document.getElementById('submitButton');
submit.addEventListener('click', makeGrid);

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
  event.preventDefault();

  // get the value of grid height
  const numOfRows = document.getElementById("inputHeight").value;

  // get the value of grid width
  const numOfCells = document.getElementById("inputWidth").value;

  // get the table
  const grid = document.getElementById('pixelCanvas');

  //clear the canvas
  grid.innerHTML = "";

  // create rows and cells
  for (let i = 0; i < numOfRows; i++) {
    // creates a table row
    const row = grid.insertRow(i);

    for (let j = 0; j < numOfCells; j++) {
      // creates a table cell
      const cell = row.insertCell(j);
    }
  }

  // set the grid attributes
  grid.setAttribute("border", "1");
  grid.setAttribute("border-collapse", "collapse");
}

// Listen canvas for click events
document.querySelector('#pixelCanvas').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'TD') {  // ← verifies target is desired element
      // set the cell to the picked color
      event.target.bgColor = document.getElementById('colorPicker').value;
    }
});
