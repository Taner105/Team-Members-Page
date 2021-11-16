let but = document.getElementById("button-change");
let body = document.querySelector("body");
let colors = [ "black", "white"]
but.addEventListener("click", degıstır);
let sıra = 0;

function degıstır(){
    if(sıra == 2) sıra = 0
    let secılenRenk = colors[sıra];
    sıra++;
    body.style.background = secılenRenk;
}