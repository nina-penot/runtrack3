const chrono = easy_id_get("chrono_display");

const start_btn = easy_id_get("start_stop"),
    save_btn = easy_id_get("save_chrono"),
    reset_btn = easy_id_get("reset");

let pressed = false;

let myinterval;

start_btn.addEventListener("click", (e) => {
    pressed = !pressed;
    console.log(pressed);

    let now = Date.now();

    if (pressed) {
        myinterval = setInterval(() => {
            // time = time++;
            // chrono.textContent = new Date(time).toISOString().slice(11, 21);
            chrono.textContent = Date.now() - now;
        }, 100);
    } else {
        clearInterval(myinterval);
    }

});

reset_btn.addEventListener("click", (e) => {
    //put chrono to 0
    clearInterval(myinterval);
});

save_btn.addEventListener("click", (e) => {
    //save current chrono to the list
});