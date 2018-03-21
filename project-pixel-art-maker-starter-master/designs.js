// Select color input
var rows, cols, storedColor;

function getPixelColor() {
  var storedColor = $('#colorPicker').val();
  //storedColor = document.getElementById('colorPicker').value;
  console.log(storedColor);
}

// Select size input
function getTableSize() {
  rows = $('#inputHeight').val();
  cols = $('#inputWidth').val();
  //rows = document.getElementById('inputHeight').value;
  //cols = document.getElementById('inputWidth').value;
  console.log(rows);
  console.log(cols);
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  $('#pixelCanvas').children().remove();
  getTableSize();
  getPixelColor();
  //var table = $('#pixelCanvas');
  var table = document.getElementById('pixelCanvas');
  console.log(table);
  for (var i = 0; i < rows; i++) {
      var tr = table.insertRow(i);
      for (var j = 0; j < cols; j++) {
          var cell = tr.insertCell(j);
          cell.setAttribute("id", i + "_" + j);
          cell.setAttribute("class", "off");
          cell.setAttribute("class", "cell");
          tr.appendChild(cell);
      }
  }
}

function colorCell() {
  $(this).css('background-color', $('#colorPicker').val());
}

// initialize
function initialize() {
    getPixelColor();
    makeGrid();
    getTableSize();
}
// start everything

window.onload = initialize;

$(":submit").click(function(){
    event.preventDefault();
    makeGrid();
});

$('#pixelCanvas').on('click', 'td', colorCell);
