//USEFUL FUNCTIONS -----------

/**
 * Toggle visibility of elements
 * @param {*} elemarray The array of elements to toggle
 * @param {*} mode The mode, must be either "block" or "none"
 */
// function toggle_my_elements(elemarray, mode) {
//     for (i in elemarray) {
//         // console.log(elemarray[i]);
//         elemarray[i].style.display = mode;
//     }
// }

/**
 * Creates a header element
 */
function create_myheader() {
    let myheader = document.createElement("header");
    myheader.id = "myheader";
    myheader.textContent = "Bienvenue!";
    document.body.appendChild(myheader);
}

/**
 * Creates a main element
 */
function create_mymain() {
    let mymain = document.createElement("main");
    mymain.id = "mymain";
    mymain.textContent = "🎉 Vous avez rentré le code, vous avez réussi! 🎉";
    document.body.appendChild(mymain);
}

/**
 * Creates a footer element
 */
function create_myfooter() {
    let myfooter = document.createElement("footer");
    myfooter.id = "myfooter";
    myfooter.textContent = "🌈🌈YOUPI!!🌈🌈(Pour reset, appuyez sur entré...)";
    document.body.appendChild(myfooter);
}

/**
 * Creates a div with id as its id and content as its text content
 * @param {*} id id to assign to the dic
 * @param {*} content text content of the div
 */
function create_adiv(id, content) {
    let mydiv = document.createElement("div");
    mydiv.id = id;
    mydiv.textContent = content;
    document.body.appendChild(mydiv);
}

/**
 * Removes an element from the document according to the given id
 * 
 * @param {*} id The id of the element to remove
 */
function remove_myelement(id) {
    document.getElementById(id).remove();
}

function update_mydiv(array) {
    div = "";
    if (array.length == 0) {
        return "";
    } else {
        for (i in array) {
            if (array[i] in ins_comp) {
                div += ins_comp[array[i]] + " ";
            } else {
                div += array[i] + " ";
            }
        }
        return div;
    }
}

//CODE -----------------------

let down = "ArrowDown",
    up = "ArrowUp",
    right = "ArrowRight",
    left = "ArrowLeft",
    back = "Backspace";

let ins_comp = {
    [down]: "⬇️",
    [up]: "⬆️",
    [right]: "➡️",
    [left]: "⬅️"
}

let konamicode = [up, up, down, down, left, right, left, right, "b", "a"];
let str_konamicode = konamicode.toString();
let attempt = [];
let code_filled = false;
let div_str = "";
// let header = document.querySelector("header"),
//     main = document.querySelector("main"),
//     footer = document.querySelector("footer");

// let myelements = [header, main, footer];

// toggle_my_elements(myelements, "none");

create_adiv("insertion", "ENTREZ CODE KONAMI : ");
let entercode = "ENTREZ CODE KONAMI : ";

document.addEventListener("keydown", function (e) {

    if (attempt.length < konamicode.length) {
        let mydiv = document.getElementById("insertion");
        mydiv.textContent = entercode + div_str;
        if (e.key == back) {
            if (attempt.length > 0) {
                attempt.pop();
                str_attempt = attempt.toString();
                div_str = update_mydiv(attempt);
                mydiv.textContent = entercode + div_str;
                // if (popped in ins_comp) {
                //     // div_str -= " " + ins_comp[popped];
                //     div_str.slice(0, 1);
                // } else {
                //     let pos = div_str.length - (popped.length + 1);
                //     console.log("my pos = " + pos);
                //     // div_str -= " " + popped;
                //     div_str = div_str.slice(pos);
                //     mydiv.textContent = entercode + div_str;
                // }
            }
        } else {
            attempt.push(e.key);
            str_attempt = attempt.toString();
            // if (e.key in ins_comp) {
            //     div_str += ins_comp[e.key] + " ";
            // } else {
            //     div_str += e.key + " ";
            // }
            div_str = update_mydiv(attempt);
            mydiv.textContent = entercode + div_str;
        }
        if (document.getElementById("badcode") != null) {
            remove_myelement("badcode");
        }

    }

    if (attempt.length == konamicode.length) {
        if (str_attempt == str_konamicode) {
            if (code_filled == false) {
                console.log("SUCCESS !!!!");
                //activate style
                // toggle_my_elements(myelements, "block");
                create_myheader();
                create_mymain();
                create_myfooter();
                remove_myelement("insertion");
                code_filled = true;
            }

            //press enter to reset
            if (e.key == "Enter") {
                console.log("RESETTING...");
                attempt = [];
                // toggle_my_elements(myelements, "none");
                remove_myelement("myheader");
                remove_myelement("mymain");
                remove_myelement("myfooter");
                create_adiv("insertion", "ENTREZ CODE KONAMI : ")
                div_str = "";
                code_filled = false;
            }
        } else {
            console.log("Failed, try again.");
            create_adiv("badcode", "Mauvais code... :(")
            document.getElementById("insertion").textContent = "ENTREZ CODE KONAMI : ";
            attempt = [];
            div_str = "";
        }
    }
    console.log("attempt to str = " + str_attempt);
    console.log("my div str to add = " + div_str);
    console.log(attempt.length + " and " + konamicode.length);
    console.log(str_konamicode);
})