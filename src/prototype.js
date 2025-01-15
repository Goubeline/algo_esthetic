const MARGIN = 100;
const COLONNE = 4;

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



function random_color_hsl(){
    let color = {
        hue: floor(random(0, 360)),
        saturation: floor(random(0, 100)),
        lightness: floor(random(0, 100))
    };
    return color;
}

function setup(){
    createCanvas(600, 700);
    colorMode(HSL);
    rectMode(CENTER);
    // rect(400,400,600,600);
    for (let i = 0; i < COLONNE; i++){
        let hsl = random_color_hsl();
        fill(hsl.hue, hsl.saturation, hsl.lightness);
        rect(150 + (i*125),325,125,600);
    }
}

function draw(){

}