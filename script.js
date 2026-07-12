function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function getGridSize() {
  let gridSize = prompt("How many boxes?");
  if (gridSize > 0 && gridSize <= 100) {
    drawGrid(gridSize);
    return;
  }
  alert("Invalid Input, enter a number between 1 and 100.");
}

function drawGrid(gridSize) {
  let container = document.querySelector(".container");
  container.innerHTML = null;

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.setAttribute("id", "row-" + i);

    for (let j = 0; j < gridSize; j++) {
      let box = document.createElement("div");
      box.setAttribute("id", "box-" + j);
      row.appendChild(box);
    }

    container.appendChild(row);
  }

  let boxes = document.querySelectorAll('div[id^="box-"]');
  boxes.forEach((box) =>
    box.addEventListener("mouseover", function (e) {
      if (!e.target.style.backgroundColor) {
        e.target.style.backgroundColor = getRandomColor();
      }
    }),
  );
}
