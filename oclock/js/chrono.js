const chrono = easy_id_get("chrono_display");
const chrono_list = easy_id_get("chrono_list");

const start_btn = easy_id_get("start_stop"),
    save_btn = easy_id_get("save_chrono"),
    reset_btn = easy_id_get("reset");

let pressed = false;
let saved_time = 0;

let myinterval;

start_btn.addEventListener("click", (e) => {
    pressed = !pressed;
    console.log(pressed);

    let now = Date.now();

    if (pressed) {
        myinterval = setInterval(() => {
            mytime = Date.now() - now + saved_time;
            thistime = new Date(Date.now() - now + saved_time).toISOString().slice(11, 22);
            chrono.textContent = thistime;
        }, 1);
    } else {
        clearInterval(myinterval);
        saved_time = mytime;
    }

});

reset_btn.addEventListener("click", (e) => {
    //put chrono to 0
    clearInterval(myinterval);
    chrono.textContent = new Date(0).toISOString().slice(11, 22);
});

save_btn.addEventListener("click", (e) => {
    //save current chrono to the list
    let timesave = easy_quick_create("div", "alarm_time", chrono.textContent);
    easy_append_children(chrono_list, timesave);
});