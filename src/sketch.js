const MARGIN = 100;
const COLONNE = 6;
const LIGNE = 4;
const LARG = 100;
const HAUT = 150;
const COLORS = [
  "#F7AEF8",
  "#B388EB",
  "#8093F1",
  "#72DDF7",
  "#A5EDF4",
  "#D7FDF0",
];
function setup() {
  createCanvas(800, 800);
  color(RGB);
  stroke(255, 255, 255);
}

function draw() {
  frameRate(2);
  let colorlist = [[-1, -1, -1, -1],
                  [-1, -1, -1, -1], 
                  [-1, -1, -1, -1],
                  [-1, -1, -1, -1],
                  [-1, -1, -1, -1],
                  [-1, -1, -1, -1]];
  
  for (let col = 0; col < COLONNE; col++) {
    for (let lign = 0; lign < LIGNE; lign++) {
      x = MARGIN + col * LARG;
      y = MARGIN + lign * HAUT;
      randval = 5;
      if (col == 0) {
        if (lign == 0) {
          randcolor = floor(random(0, 5));
        } else {
          randcolor = floor(random(0, 4));
          if (randcolor >= colorlist[col][lign - 1]) {
            randcolor++;
          }
        }
      } else {
        if (lign == 0) {
          randcolor = floor(random(0, 4));
          if (randcolor >= colorlist[col - 1][lign]) {
            randcolor++;
          }
        } else {
          randcolor = floor(random(0, 3));
          if (randcolor >= colorlist[col - 1][lign]) {
            randcolor++;
          }
          if (randcolor >= colorlist[col][lign - 1]) {
            randcolor++;
            if (randcolor >= colorlist[col - 1][lign]) {
              randcolor++;
            }
          }
        }
      }

      fill(COLORS[randcolor]);
      colorlist[col][lign] = randcolor;
      rect(x, y, LARG, HAUT);
    }
  }
}
