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

function add_substract_value(name,add_or_substract){
  if (name === 'act'){
    if(add_or_substract === 'add'){
      input_act.value++;
    } else if (add_or_substract === 'sub'){
      input_act.value--;
    }
    value_act.textContent = input_act.value;
  } else if (name === 'bri'){
    if(add_or_substract === 'add'){
      input_bri.value++;
    } else if (add_or_substract === 'sub'){
      input_bri.value--;
    }
    value_bri.textContent = input_bri.value;
  } else if (name === 'bit'){
    if(add_or_substract === 'add'){
      input_bit.value++;
    } else if (add_or_substract === 'sub'){
      input_bit.value--;
    }
    value_bit.textContent = input_bit.value;
  } else if (name === 'aci'){
    if(add_or_substract === 'add'){
      input_aci.value++;
    } else if (add_or_substract === 'sub'){
      input_aci.value--;
    }
    value_aci.textContent = input_aci.value;
  } else if (name === 'tem'){
    if(add_or_substract === 'add'){
      input_tem.value++;
    } else if (add_or_substract === 'sub'){
      input_tem.value--;
    }
    value_tem.textContent = input_tem.value;
  } else if (name === 'hum'){
    if(add_or_substract === 'add'){
      input_hum.value++;
    } else if (add_or_substract === 'sub'){
      input_hum.value--;
    }
    value_hum.textContent = input_hum.value;
  } else if (name === 'lou'){
    if(add_or_substract === 'add'){
      input_lou.value++;
    } else if (add_or_substract === 'sub'){
      input_lou.value--;
    }
    value_lou.textContent = input_lou.value;
  } else if (name === 'har'){
    if(add_or_substract === 'add'){
      input_har.value++;
    } else if (add_or_substract === 'sub'){
      input_har.value--;
    }
    value_har.textContent = input_har.value;
  }
}

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
  if (count >= NB_LIGNES_CSV){
    window.alert("CSV Has reached it's maximum capacity ! Please download your data and reload the page if you would like to continue.");
  }
  input_act.value =50;
  value_act.textContent =50;
  input_bri.value =50;
  value_bri.textContent =50;
  input_bit.value =50;
  value_bit.textContent =50;
  input_aci.value =50;
  value_aci.textContent =50;
  input_tem.value =50;
  value_tem.textContent =50;
  input_hum.value =50;
  value_hum.textContent =50;
  input_lou.value =50;
  value_lou.textContent =50;
  input_har.value =50;
  value_har.textContent =50;
  

  fakeSetUp();
}

function createCSV(){
  const rows =[
    ["activeness","brightness","bitterness","acidity","temperature","humidity","loudness","harmoniousness","color_1_h","color_1_s","color_1_l","color_2_h","color_2_s","color_2_l","color_3_h","color_3_s","color_3_l","color_4_h","color_4_s","color_4_l"]
  ];
  let limit = 0;
  if (count < NB_LIGNES_CSV){
    limit = count;
  } else {
    limit = NB_LIGNES_CSV;
  }

  for (let i = 0 ; i < limit;i++){
    rows.push(
      [colors_data[i].activeness,colors_data[i].brightness,colors_data[i].bitterness,colors_data[i].acidity,colors_data[i].temperatrure,colors_data[i].humidty,colors_data[i].loudness,colors_data[i].harmoniousness,colors_data[i].color_1_hue,colors_data[i].color_1_saturation,colors_data[i].color_1_lightness,colors_data[i].color_2_hue,colors_data[i].color_2_saturation,colors_data[i].color_2_lightness,colors_data[i].color_3_hue,colors_data[i].color_3_saturation,colors_data[i].color_3_lightness,colors_data[i].color_4_hue,colors_data[i].color_4_saturation,colors_data[i].color_4_lightness]
    );
  }

  let csvContent = "data:text/csv;charset=utf-8," 
        + rows.map(e => e.join(",")).join("\n");
  let encodedUri = encodeURI(csvContent);
  
  var downloadLink = document.createElement("a");
  downloadLink.href = encodedUri;
  downloadLink.download = "colors_values.csv";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);  
}


function random_color_hsl(){
    let random_color = {
        hue: floor(random(0, 360)),
        saturation: floor(random(0, 100)),
        lightness: floor(random(0, 100))
    };
    return random_color;
}

// function tempered_brightness_hsl(){

// }

function setup(){
    createCanvas(590, 700);
    noLoop();
    
}

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