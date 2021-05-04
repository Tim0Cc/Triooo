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

const table = document.querySelector("table");
table.innerHTML = "Hello from Query";