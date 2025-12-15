//Reboot world
const rebootworld_btn = easy_id_get("rebootworld");
const monde_text_elems = easy_class_get(".lead");
const text1 = "T’endors pas c’est l’heure de mourir.",
    text2 = "C’est dommage qu’elle doive mourir, mais on en est tous là !",
    text3 = "Un flic quand il quitte le métier il n’est plus personne.";

rebootworld_btn.addEventListener("click", (e) => {
    monde_text_elems[0].textContent = text1;
    monde_text_elems[1].textContent = text2;
    monde_text_elems[2].textContent = text3;
});

//pagination changes main block to Blade Runner quotes

//progress bar button
const bar_btnleft = easy_id_get("bar_btn_left");
const bar_btnright = easy_id_get("bar_btn_right");
let bar_size = easy_class_get(".progress-bar");
console.log(bar_size.style.width);

bar_btnleft.addEventListener("click", (e) => {
    let rawnum = Number(bar_size.style.width.slice(0, -1));
    if (rawnum - 5 > 0) {
        rawnum -= 5;
    } else {
        rawnum = 0;
    }
    bar_size.style.width = rawnum + "%";
});

bar_btnright.addEventListener("click", (e) => {
    let rawnum = Number(bar_size.style.width.slice(0, -1));
    if (rawnum + 5 < 100) {
        rawnum += 5;
    } else {
        rawnum = 100;
    }
    bar_size.style.width = rawnum + "%";
})

//Code: d,g,c => info on left modal

//Successful right form submit = random color on spinner