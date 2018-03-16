// Select color input
var storedColor, rows, cols,gridContainer;

function getPixelColor() {
  storedColor = document.getElementById("colorPicker");
}

// Select size input
function getTableSize() {
  rows = document.getElementById("inputHeight");
  cols = document.getElementById("inputWidth");
}

function createTable() {
  gridContainer = document.getElementById("pixelCanvas");
  if (!gridContainer) {
    // throw error
    console.error("Problem: no div for the grid table!");
  }
  var table = document.createElement("table");
  table.setAttribute("id", "canvas")

  for (var i = 0; i < rows; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < cols; j++) {
          var cell = document.createElement("td");
          cell.setAttribute("id", i + "_" + j);
          cell.setAttribute("class", "off");
          cell.setAttribute("class", "cell");
          cell.onclick = cellClickHandler;
          tr.appendChild(cell);
      }
      table.appendChild(tr);
  }
  gridContainer.appendChild(table);
}


// When size is submitted by the user, call makeGrid()


// initialize
function initialize() {
    getPixelColor();
    createTable();
    getTableSize();
}
console.log(storedColor);
console.log(rows);
console.log(cols);
// lay out the board



function cellClickHandler() {
    var classes = this.getAttribute("class");
    if (classes.indexOf("on") > -1) {
        this.setAttribute("class", "off");
    } else {
        this.setAttribute("class", "on");
        var storedColor = getPixelColor();
        this.style.backgroundColor = storedColor;


    }
}


// start everything

window.onload = initialize;
