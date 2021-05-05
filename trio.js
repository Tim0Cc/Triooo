// create Tiles Array

const tilesArray = []

function createTiles() {
  console.log(tilesArray);
  for (i=0; i<4; i++) {
    tilesArray.push("9")
  }
  for (i=0; i<5; i++) {
    tilesArray.push("1", "7", "8")
  }
  for (i=0; i<6; i++) {
    tilesArray.push("2", "3", "4", "5", "6")
  }
  console.log("tiles Array: " + tilesArray);
  console.log("Number of Tiles: " + tilesArray.length);
  
}

createTiles();

// shuffle Tiles

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const shuffledArray = shuffle(tilesArray);
console.log("shuffled Array: " + shuffledArray);
console.log("Number of Tiles: " + shuffledArray.length);

// fill HTML table

const table = document.querySelector("table");

let html = "";
function fillHTML(a) {
  let td = "";
  let row = "";
  for (j = 0; j < 7; j++) {
    let rowdata ="";
    for (i = 0; i < 7; i++) {
      td = "<td>" + a[0] + "</td>";
      rowdata += td;
      a = a.slice(1);
    }
    row = "<tr>" + rowdata + "</tr>";
    html += row;
  }
}
fillHTML(shuffledArray);
// console.log(html);
table.innerHTML = html;
