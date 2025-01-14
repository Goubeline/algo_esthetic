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


function random_color_hsl(){
    let color = {
        hue: floor(random(0, 360)),
        saturation: floor(random(0, 100)),
        lightness: floor(random(0, 100))
    };
    return color;
}


function setup() {
  createCanvas(800, 800);
  color(HSL);
  stroke(0, 0, 100);
  for (let col = 0; col < COLONNE; col++) {
    for (let lign = 0; lign < LIGNE; lign++) {
      x = MARGIN + col * LARG;
      y = MARGIN + lign * HAUT;

      let hsl = random_color_hsl();
      fill(hsl.hue, hsl.saturation, hsl.lightness);
      rect(x, y, LARG, HAUT);
    }
  }
}

function draw() {
    
}

function createCSV() {
    const rows = [
        ["name1", "city1", "some other info"],
        ["name2", "city2", "more info"]
    ];
    
    let csvContent = "data:text/csv;charset=utf-8," 
        + rows.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}