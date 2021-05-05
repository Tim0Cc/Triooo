// DOCUMENT VARIABLES
//

const sbutton = document.querySelector(".shuffle");
const table = document.querySelector("table");
const nextButton = document.querySelector(".next");

// Events
//

// Setup / shuffle

sbutton.addEventListener('click', function() {
  createTiles();
  shuffledArray = shuffle(tilesArray);
  fillHTML(shuffledArray);
  // console.log(html);
  table.innerHTML = html;
});

// new / next Number

nextButton.addEventListener('click', newNumber) 


// VARIABLES
//

// const table = document.querySelector("table");

let tilesArray = []
let shuffledArray;
let html;
let c;



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
      color();
      // console.log(c);
      td = "<td style=\"border-color:" + c + ";\"" + ">" + a[0] + "</td>";
      console.log(td)
      rowdata += td;
      a = a.slice(1);
    }
    row = "<tr>" + rowdata + "</tr>";
    html += row;
  }
}

// color of td border

function color() {
  var m = Math.floor((Math.random()*3)+1);
  if (m == 1) {
    c = "#ffa0a0";
  } else if (m == 2) {
    c = "#a0ffa0";
  } else {
    c = "#a0a0ff";
  }
}

let nElement = "";

function newNumber() {
  if (nElement != "") {
    nElement = "";
  }
  let n = Math.floor((Math.random() * 50)+1);
  nElement = nextButton.insertAdjacentHTML('afterend', "<h3>" + n + "</h3>");
}

function say() {
  console.log('hi');
}
