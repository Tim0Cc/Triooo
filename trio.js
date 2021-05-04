// create Tiles Array

const tilesArray = []

function createTiles() {
  console.log(tilesArray);
  for (i=0; i<4; i++) {
    tilesArray.push("9")
  }
  for (i=0; i<5; i++) {
    tilesArray.push("7", "8")
  }
  for (i=0; i<6; i++) {
    tilesArray.push("2", "3", "4", "5", "6")
  }
  console.log(tilesArray);
}

createTiles();

// fill HTML table

const table = document.querySelector("table");

function fillHTML() {
  table.innerHTML = "Hello from Query";
}

fillHTML();