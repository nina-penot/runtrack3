//USEFUL FUNCTIONS -----------

/**
 * Toggle visibility of elements
 * @param {*} elemarray The array of elements to toggle
 * @param {*} mode The mode, must be either "block" or "none"
 */
function toggle_my_elements(elemarray, mode) {
    for (i in elemarray) {
        // console.log(elemarray[i]);
        elemarray[i].style.display = mode;
    }
}

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

//CODE -----------------------

let down = "ArrowDown",
    up = "ArrowUp",
    right = "ArrowRight",
    left = "ArrowLeft";

let ins_comp = {
    "ArrowDown": "⬇️",
    "ArrowUp": "⬆️",
    "ArrowRight": "➡️",
    "ArrowLeft": "⬅️"
}

let konamicode = [up, up, down, down, left, right, left, right, "b", "a"];
let str_konamicode = konamicode.toString();
let attempt = [];
let code_filled = false;
// let header = document.querySelector("header"),
//     main = document.querySelector("main"),
//     footer = document.querySelector("footer");

// let myelements = [header, main, footer];

// toggle_my_elements(myelements, "none");

create_adiv("insertion", "ENTREZ CODE KONAMI : ");

document.addEventListener("keydown", function (e) {

    console.log(e.key);
    if (attempt.length < konamicode.length) {
        let mydiv = document.getElementById("insertion");
        if (document.getElementById("badcode") != null) {
            remove_myelement("badcode");
        }
        attempt.push(e.key);
        str_attempt = attempt.toString();
        if (e.key in ins_comp) {
            mydiv.textContent += ins_comp[e.key] + " ";
        } else {
            mydiv.textContent += e.key + " ";
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
                code_filled = false;
            }
        } else {
            console.log("Failed, try again.");
            create_adiv("badcode", "Mauvais code... :(")
            document.getElementById("insertion").textContent = "ENTREZ CODE KONAMI : ";
            attempt = [];
        }
    }
    console.log(str_attempt);
    console.log(attempt.length + " and " + konamicode.length);
    console.log(str_konamicode);
})