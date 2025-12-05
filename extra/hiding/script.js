var mydiv = document.getElementById("mydiv");

function toggle() {
    console.log(mydiv.style.display);
    if (mydiv.style.display == "block") {
        mydiv.style.display = "none";
    } else {
        mydiv.style.display = "block";
    }
}