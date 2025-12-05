let down = "ArrowDown",
    up = "ArrowUp",
    right = "ArrowRight",
    left = "ArrowLeft";

let konamicode = [down, down, up, up, left, right, left, right, "b", "a"];
let str_konamicode = konamicode.toString();
let attempt = [];

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
            //press enter to reset
            if (e.key == "Enter") {
                console.log("RESETTING...");
                attempt = [];
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