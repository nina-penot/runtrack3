//--------------------------
//FUNCTIONS
//--------------------------

async function get_my_text(insertion) {
    const response = await fetch("./expression.txt");
    const my_text = await response.text();
    // console.log(my_text);
    insertion.textContent = my_text;
}

//--------------------

const mybutton = document.getElementById("button");

mybutton.addEventListener("click", function (e) {
    // const my_text = get_my_text();
    let my_p = document.createElement("p");
    get_my_text(my_p);
    mybutton.after(my_p);
})