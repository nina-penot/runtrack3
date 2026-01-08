//get the clock element
const clock = easy_id_get("clock");

//check the time and add it to clock
function get_time() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = make_double_digit(h);
    m = make_double_digit(m);
    s = make_double_digit(s);
    clock.textContent = h + ":" + m + ":" + s;
    //setTimeout(get_time, 1000);
}

setInterval(get_time, 1000);
//get_time();