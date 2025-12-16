//Reboot world
const rebootworld_btn = easy_id_get("rebootworld");
const monde_text_elems = easy_class_get(".lead");

const monde_og_text = [
    monde_text_elems[0].textContent,
    monde_text_elems[1].textContent,
    monde_text_elems[2].textContent
];

const blade_runner = [
    "T’endors pas c’est l’heure de mourir.",
    "C’est dommage qu’elle doive mourir, mais on en est tous là !",
    "Un flic quand il quitte le métier il n’est plus personne."
];

const waluigi_quotes = [
    "WAAAH!!",
    "Waluigi numbag one!!",
    "AW, everybody cheated... :("
]

rebootworld_btn.addEventListener("click", (e) => {
    monde_text_elems[0].textContent = blade_runner[0];
    monde_text_elems[1].textContent = blade_runner[1];
    monde_text_elems[2].textContent = blade_runner[2];
});

//pagination changes main block to Blade Runner quotes

//progress bar button
const bar_btnleft = easy_id_get("bar_btn_left");
const bar_btnright = easy_id_get("bar_btn_right");
let bar_size = easy_class_get(".progress-bar");

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

const form_modal = easy_id_get("form_modal");
const form_modal_text = easy_id_get("form_modal_text");

//get form data
const leftform = easy_id_get("leftform");
let form_infos = {};
console.log(leftform.elements);
for (i = 0; i < leftform.elements.length; i++) {
    form_infos[i] = {
        "name": leftform.elements[i].placeholder,
        "value": leftform.elements[i].value,
    };
}
//insert form data into modal text by inserting new divs
for (e in form_infos) {
    let text_to_add = form_infos[e]["name"] + " : " + form_infos[e]["value"];
    let newdiv = easy_quick_create("div", null, text_to_add);
    form_modal_text.appendChild(newdiv);
}


const form_modal_boot = new bootstrap.Modal(easy_id_get("form_modal"));

const mycode = ["d", "g", "c"];
const mycode_str = mycode.toString();
let code_enter = [];

// console.log(form_modal);

// form_modal.addEventListener('shown.bs.modal', (e) => {
//     console.log(e);
// })

window.addEventListener("keydown", (e) => {
    code_enter.push(e.key);
    for (i in mycode) {
        if (code_enter[i]) {
            if (code_enter[i] != mycode[i]) {
                code_enter = [];
            }
        }
    }

    let code_enter_str = code_enter.toString();
    if (code_enter.length == mycode.length) {
        if (code_enter_str == mycode_str) {
            form_modal_boot.show();
            code_enter = [];
        } else {
            code_enter = [];
        }
    }
});

//Successful right form submit = random color on spinner

const spinner_elem = easy_id_get("spinner");
const rightform = easy_id_get("rightform");
const inputthing = easy_id_get("inputEmail4");

function change_spinner_color(color) {
    spinner_elem.classList = [];
    spinner_elem.classList.add("spinner-border");
    spinner_elem.classList.add(color);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const possible_colors = [
    "text-danger",
    "text-warning",
    "text-success",
    "text-dark"
];

rightform.addEventListener("input", (e) => {
    let randnum = getRandomInt(possible_colors.length - 1);
    console.log(rightform.checkValidity());
    console.log(randnum);

    if (rightform.checkValidity()) {
        change_spinner_color(possible_colors[randnum]);
    } else {
        change_spinner_color("text-primary");
    }
});