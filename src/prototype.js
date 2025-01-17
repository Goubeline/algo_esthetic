const MARGIN = 100;
const COLONNE = 4;
const NB_LIGNES_CSV = 100;

let state = 'red_light';

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
let textFrame;
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
}

function hachure(x){
  fill("white");
  rect(x, 0, 50, 600);
  fill("black");
  for(let y = 0; y <= 620; y+= 15)
  {
    quad(x, y + 5, x, y + 8, x + 50, y - 17, x + 50, y - 20);
  }
}

function animate(){
  if (frame == -1)
    {
      frame = 649;
    }

    noStroke();
    fill(color_1.hue, color_1.saturation, color_1.lightness);
    rect(-650 + frame, 0, 150, 600);
    fill(color_2.hue, color_2.saturation, color_2.lightness);
    rect(-500 + frame, 0, 150, 600);
    fill(color_3.hue, color_3.saturation, color_3.lightness);
    rect(-350 + frame, 0, 150, 600);
    fill(color_4.hue, color_4.saturation, color_4.lightness);
    rect(-200 + frame, 0, 150, 600);
    hachure(-50 + frame);
    fill(color_1.hue, color_1.saturation, color_1.lightness);
    rect(frame, 0, 150, 600);
    fill(color_2.hue, color_2.saturation, color_2.lightness);
    rect(150 + frame, 0, 150, 600);
    fill(color_3.hue, color_3.saturation, color_3.lightness);
    rect(300 + frame, 0, 150, 600);
    fill(color_4.hue, color_4.saturation, color_4.lightness);
    rect(450 + frame, 0, 150, 600);
    hachure(600 + frame);

    push()
      stroke("white");
      strokeWeight(4);
      fill("black");
      text("1", frame - 580, 590);
      text("2", frame - 430, 590);
      text("3", frame - 280, 590);
      text("4", frame - 130, 590);
      text("1", frame + 70, 590);
      text("2", frame + 220, 590);
      text("3", frame + 370, 590);
      text("4", frame + 520, 590);
    pop()


    frame--;
}

function no_animation(){
  noStroke();
  fill(colors_data[count].color_1_hue,colors_data[count].color_1_saturation, colors_data[count].color_1_lightness);
  rect(0, 0, 150, 600);
  fill(colors_data[count].color_2_hue,colors_data[count].color_2_saturation, colors_data[count].color_2_lightness);  
  rect(150, 0, 150, 600);
  fill(colors_data[count].color_3_hue,colors_data[count].color_3_saturation, colors_data[count].color_3_lightness);
  rect(300, 0, 150, 600);
  fill(colors_data[count].color_4_hue,colors_data[count].color_4_saturation, colors_data[count].color_4_lightness);
  rect(450, 0, 150, 600);
  fill("white");
  rect(600, 0, 50, 600);
  stroke("white");
  strokeWeight(4);
  fill("black");
  text("1", 70, 590);
  text("2", 220, 590);
  text("3", 370, 590);
  text("4", 520, 590);
}

function switch_animation(){
  if (state === 'red_light'){
    document.getElementById('animate_sliding_colors').textContent = 'Make the colors stop';
    frame = 650;
    state = 'green_light';
  } else if (state === 'green_light'){
    document.getElementById('animate_sliding_colors').textContent = 'Make the colors move';
    state = 'red_light';
  }
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
      [colors_data[i].activeness/100,colors_data[i].brightness/100,colors_data[i].bitterness/100,colors_data[i].acidity/100,colors_data[i].temperatrure/100,colors_data[i].humidty/100,colors_data[i].loudness/100,colors_data[i].harmoniousness/100,colors_data[i].color_1_hue,colors_data[i].color_1_saturation,colors_data[i].color_1_lightness,colors_data[i].color_2_hue,colors_data[i].color_2_saturation,colors_data[i].color_2_lightness,colors_data[i].color_3_hue,colors_data[i].color_3_saturation,colors_data[i].color_3_lightness,colors_data[i].color_4_hue,colors_data[i].color_4_saturation,colors_data[i].color_4_lightness]
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

function triangular_distribution(min, max, top) {
  let F = (top - min) / (max / min);
  let rand = random();
  if (rand < F) {
    return (min + sqrt(rand * (max - min) * (top - min)));
  }
  else
  {
    return (max - sqrt((1 - rand) * (max - min) * (max - top)));
  }
}

/*
 * Returns member of set with a given mean and standard deviation
 * mean: mean
 * standard deviation: std_dev 
 */
function createMemberInNormalDistribution(mean,std_dev, min, max){
  let rand = mean + (gaussRandom()*std_dev);
  while (rand < min || rand > max) {
    rand = mean + (gaussRandom()*std_dev);
  }
  return rand;
}

/*
* Returns random number in normal distribution centering on 0.
* ~95% of numbers returned should fall between -2 and 2
* ie within two standard deviations
*/
function gaussRandom() {
  var u = 2*random()-1;
  var v = 2*random()-1;
  var r = u*u + v*v;
  /*if outside interval [0,1] start over*/
  if(r == 0 || r >= 1) return gaussRandom();

  var c = sqrt(-2*log(r)/r);
  return u*c;
  
  /* todo: optimize this algorithm by caching (v*c) 
   * and returning next time gaussRandom() is called.
   * left out for simplicity */
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
  createCanvas(650, 600);
  noStroke();
  colorMode(HSL);
  textSize(25);
  fakeSetUp();
  frame = 650;
}

function draw(){
  if (state === 'green_light'){
    animate();
  } else if (state === 'red_light'){
    no_animation();
  }
}