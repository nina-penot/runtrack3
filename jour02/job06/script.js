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

//CODE -----------------------

let down = "ArrowDown",
    up = "ArrowUp",
    right = "ArrowRight",
    left = "ArrowLeft";

let konamicode = [down, down, up, up, left, right, left, right, "b", "a"];
let str_konamicode = konamicode.toString();
let attempt = [];
let header = document.querySelector("header"),
    main = document.querySelector("main"),
    footer = document.querySelector("footer");

let myelements = [header, main, footer];

toggle_my_elements(myelements, "none");

document.addEventListener("keydown", function (e) {

    console.log(e.key);
    if (attempt.length < konamicode.length) {
        attempt.push(e.key);
        str_attempt = attempt.toString();
    }

    if (attempt.length == konamicode.length) {
        if (str_attempt == str_konamicode) {
            console.log("SUCCESS !!!!");
            //activate style
            toggle_my_elements(myelements, "block");
            //press enter to reset
            if (e.key == "Enter") {
                console.log("RESETTING...");
                attempt = [];
                toggle_my_elements(myelements, "none");
            }
        } else {
            console.log("Failed, try again.");
            attempt = [];
        }
    }
    console.log(str_attempt);
    console.log(attempt.length + " and " + konamicode.length);
    console.log(str_konamicode);
})