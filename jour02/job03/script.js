var mybutton = document.getElementById("button");
var mycount = document.getElementById("compteur");

mybutton.addEventListener("click", function () {
    mycount.textContent++;
})