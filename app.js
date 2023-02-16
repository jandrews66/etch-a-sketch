const container = document.querySelector('#container');

function createGrid() {

    if (document.getElementById("column")) {
        deleteGrid();
    }
    for (let i = 0; i < num; i++) {
        const column = document.createElement('div');
        column.setAttribute('id','column');
        column.classList.add('column');
        container.appendChild(column);
    }

    const columns = document.getElementsByClassName("column");
    for (let column of columns){
        for (let i = 0; i < num; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        column.appendChild(square);
        }
    }
    colorSquares();
}

function deleteGrid () {
    while (document.getElementById("column")) {
        const column = document.getElementById("column")
        column.remove();
    }
}


const rangeslider = document.getElementById("sliderRange");
const output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
  num = this.value;
  createGrid();
}

function colorSquares () {
    const squares = document.getElementsByClassName("square");

    const setColor = e => {
        const selection = e.target;
        selection.setAttribute("style", "background-color:blue;")
    }

    for (let square of squares) {
        square.addEventListener("mouseover", setColor);
    }
}