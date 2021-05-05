// Events
//

// Setup / shuffle

sbutton = document.querySelector(".shuffle");
sbutton.addEventListener('click', function() {
  createTiles();
  shuffledArray = shuffle(tilesArray);
  fillHTML(shuffledArray);
  // console.log(html);
  table.innerHTML = html;
});


// VARIABLES
//

const table = document.querySelector("table");

let tilesArray = []
let shuffledArray;
let html;



// CALLBACK FUNCTIONS
//

// create Tiles Array

function createTiles() {
  // console.log(tilesArray);
  tilesArray = []
  for (i=0; i<4; i++) {
    tilesArray.push("9")
  }
  for (i=0; i<5; i++) {
    tilesArray.push("1", "7", "8")
  }
  for (i=0; i<6; i++) {
    tilesArray.push("2", "3", "4", "5", "6")
  }
}

// shuffle Tiles

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


// fill HTML table

function fillHTML(a) {
  table.innerHTML = "";
  html = "";
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