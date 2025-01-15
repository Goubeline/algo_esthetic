const MARGIN = 100;
const COLONNE = 4;
const NB_LIGNES_CSV = 100;

class color_concepts{
  constructor(){
    this.activeness = -1;
    this.brightness = -1;
    this.bitterness = -1;
    this.acidity = -1;
    this.temperatrure = -1;
    this.humidty = -1;
    this.loudness = -1;
    this.harmoniousness = -1;
    this.color_1_hue = -1;
    this.color_1_saturation = -1;
    this.color_1_lightness = -1;
    this.color_2_hue = -1;
    this.color_2_saturation = -1;
    this.color_2_lightness = -1;
    this.color_3_hue = -1;
    this.color_3_saturation = -1;
    this.color_3_lightness = -1;
    this.color_4_hue = -1;
    this.color_4_saturation = -1;
    this.color_4_lightness  = -1;
  }
  
};

let colors_data = [];
let count = 0;
for (let i = 0 ; i < NB_LIGNES_CSV;i++){
  let subsitute = new color_concepts();
  colors_data.push(subsitute);
}


//activeness related
const value_act = document.querySelector("#value_activeness");
const input_act = document.querySelector("#activeness");
value_act.textContent = input_act.value;
input_act.addEventListener("input", (event) => {
  value_act.textContent = event.target.value;
});

//brightness related
const value_bri = document.querySelector("#value_brightness");
const input_bri = document.querySelector("#brightness");
value_bri.textContent = input_bri.value;
input_bri.addEventListener("input", (event) => {
  value_bri.textContent = event.target.value;
});

//bitterness related
const value_bit = document.querySelector("#value_bitterness");
const input_bit = document.querySelector("#bitterness");
value_bit.textContent = input_bit.value;
input_bit.addEventListener("input", (event) => {
  value_bit.textContent = event.target.value;
});

//acidity related
const value_aci = document.querySelector("#value_acidity");
const input_aci = document.querySelector("#acidity");
value_aci.textContent = input_aci.value;
input_aci.addEventListener("input", (event) => {
  value_aci.textContent = event.target.value;
});

//temperature related
const value_tem = document.querySelector("#value_temperature");
const input_tem = document.querySelector("#temperature");
value_tem.textContent = input_tem.value;
input_tem.addEventListener("input", (event) => {
  value_tem.textContent = event.target.value;
});

//humidity related
const value_hum = document.querySelector("#value_humidity");
const input_hum = document.querySelector("#humidity");
value_hum.textContent = input_hum.value;
input_hum.addEventListener("input", (event) => {
  value_hum.textContent = event.target.value;
});

//loudness related
const value_lou = document.querySelector("#value_loudness");
const input_lou = document.querySelector("#loudness");
value_lou.textContent = input_lou.value;
input_lou.addEventListener("input", (event) => {
  value_lou.textContent = event.target.value;
});

//harmoniousness related
const value_har = document.querySelector("#value_harmoniousness");
const input_har = document.querySelector("#harmoniousness");
value_har.textContent = input_har.value;
input_har.addEventListener("input", (event) => {
  value_har.textContent = event.target.value;
});

let frame;
let buff;
let color_1;
let color_2;
let color_3;
let color_4;
function fakeSetUp(){
  color_1 = random_color_hsl();
  color_2 = random_color_hsl();
  color_3 = random_color_hsl();
  color_4 = random_color_hsl();
  colors_data[count].color_1_hue = color_1.hue;
  colors_data[count].color_1_saturation = color_1.saturation;
  colors_data[count].color_1_lightness = color_1.lightness;
  colors_data[count].color_2_hue = color_2.hue;
  colors_data[count].color_2_saturation = color_2.saturation;
  colors_data[count].color_2_lightness = color_2.lightness;
  colors_data[count].color_3_hue = color_3.hue;
  colors_data[count].color_3_saturation = color_3.saturation;
  colors_data[count].color_3_lightness = color_3.lightness;
  colors_data[count].color_4_hue = color_4.hue;
  colors_data[count].color_4_saturation = color_4.saturation;
  colors_data[count].color_4_lightness = color_4.lightness;
  frame = 150;
}

function validate_colors_concepts(){
  console.clear();
  colors_data[count].activeness = input_act.value;
  colors_data[count].brightness = input_bri.value;
  colors_data[count].bitterness = input_bit.value;
  colors_data[count].acidity = input_aci.value;
  colors_data[count].temperatrure = input_tem.value;
  colors_data[count].humidty = input_hum.value;
  colors_data[count].loudness = input_lou.value;
  colors_data[count].harmoniousness = input_har.value;  
  console.log(colors_data[count]);
  console.log(colors_data);
  count++;
  fakeSetUp();
}


function random_color_hsl(){
    let random_color = {
        hue: floor(random(0, 360)),
        saturation: floor(random(0, 100)),
        lightness: floor(random(0, 100))
    };
    return random_color;
}

// function setup(){
//     createCanvas(590, 700);
//     noLoop();
    
// }

// function draw(){
//   colorMode(HSL);
//   rectMode(CENTER);
//   for (let i = 0; i < COLONNE; i++){
//       let hsl = random_color_hsl();
//       fill(hsl.hue, hsl.saturation, hsl.lightness);
//       rect(125 + (i*125),325,125,600);
//       if (i === 0){
//         colors_data[count].color_1_hue = hsl.hue;
//         colors_data[count].color_1_saturation = hsl.saturation;
//         colors_data[count].color_1_lightness = hsl.lightness;
//       } else if (i === 1){
//         colors_data[count].color_2_hue = hsl.hue;
//         colors_data[count].color_2_saturation = hsl.saturation;
//         colors_data[count].color_2_lightness = hsl.lightness;
//       } else if (i === 2){
//         colors_data[count].color_3_hue = hsl.hue;
//         colors_data[count].color_3_saturation = hsl.saturation;
//         colors_data[count].color_3_lightness = hsl.lightness;
//       } else {
//         colors_data[count].color_4_hue = hsl.hue;
//         colors_data[count].color_4_saturation = hsl.saturation;
//         colors_data[count].color_4_lightness = hsl.lightness;
//       }
//   }
// }

function setup(){
  createCanvas(600, 700);
  noStroke();
  colorMode(HSL);
  fakeSetUp();
}

function draw(){
  if (frame == -1)
  {
    frame = 150;
    buff = color_1;
    color_1 = color_2;
    color_2 = color_3;
    color_3 = color_4;
    color_4 = buff;
  }
  fill(color_4.hue, color_4.saturation, color_4.lightness);
  rect(-150 + frame, 0, 150, 600);
  fill(color_1.hue, color_1.saturation, color_1.lightness);
  rect(frame, 0, 150, 600);
  fill(color_2.hue, color_2.saturation, color_2.lightness);
  rect(150 + frame, 0, 150, 600);
  fill(color_3.hue, color_3.saturation, color_3.lightness);
  rect(300 + frame, 0, 150, 600);
  fill(color_4.hue, color_4.saturation, color_4.lightness);
  rect(450 + frame, 0, 150, 600);
  frame--;
}