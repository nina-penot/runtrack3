function make_double_digit(num) {
    if (num < 10 && num.toString().length <= 1) {
        return "0" + num;
    } else {
        return num;
    }
}

function get_now_in_seconds() {
    return Math.floor((Date.now()) / 1000);
}

//

function check_if_time(hour, minute) {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    if (hour == h && minute == m) {
        return true;
    } else {
        return false;
    }
}

function get_remaining_time(hour, minute) {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    //convert to minutes
    let total_min = (hour * 60) + minute;
    let total_min_now = (h * 60) + m;
    let plus_one_day_first = (24 * 60) - total_min_now;
    let plus_one_day_second = (24 * 60) - ((24 * 60) - total_min);

    let total_diff = total_min < total_min_now ? plus_one_day_first + plus_one_day_second :
        total_min - total_min_now;

    let hour_diff = Math.floor(total_diff / 60);
    let minute_diff = total_diff - (hour_diff * 60);

    let time_diff = {
        "hour": make_double_digit(hour_diff),
        "minute": make_double_digit(minute_diff)
    };

    return time_diff;
}

function get_remaining_seconds(hour, minute) {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    //convert to minutes
    let total_min = (hour * 60) + minute;
    let total_min_now = (h * 60) + m;
    let plus_one_day_first = (24 * 60) - total_min_now;
    let plus_one_day_second = (24 * 60) - ((24 * 60) - total_min);

    let total_diff = total_min < total_min_now ? plus_one_day_first + plus_one_day_second :
        total_min - total_min_now;

    let seconds = total_diff * 60;

    console.log("func get_remaining_seconds: " + seconds);
    return seconds;
}

function get_units_from_seconds(seconds) {
    //
}

function convert_to_seconds(h, m, s) {
    return s + (m * 60) + (h * 60 * 60);
}

//--------------------------------
// ALARM
//--------------------------------

function load_alarms() {
    if (localStorage.getItem("alarms")) {
        let alarms = JSON.parse(localStorage.getItem("alarms"));
        return alarms;
    } else {
        return null;
    }
}

function save_alarm(hours, minutes) {
    let newid = Date.now();

    let myjson = {
        id: newid,
        hour: hours,
        minute: minutes
    };

    if (!localStorage.getItem("alarms")) {
        myjson = [myjson];
        localStorage.setItem("alarms", JSON.stringify(myjson));
    } else {
        let alarms = JSON.parse(localStorage.getItem("alarms"));
        alarms.push(myjson);
        localStorage.setItem("alarms", JSON.stringify(alarms));
    }

    return newid;
}

function get_alarm_info(alarm_id) {
    let myalarms = JSON.parse(localStorage.getItem("alarms"));
    let target = myalarms.find(a => a.id == alarm_id);
    return target;
}

function remove_alarm(alarm_id) {
    let myalarms = JSON.parse(localStorage.getItem("alarms"));
    let target = myalarms.find(a => a.id == alarm_id);
    let target_index = myalarms.indexOf(target);
    myalarms.splice(target_index, 1);

    if (myalarms.length > 0) {
        localStorage.setItem("alarms", JSON.stringify(myalarms));
    } else {
        localStorage.removeItem("alarms");
    }
}

function create_alarm_elem(alarm_id, hour, minute) {
    let list_elem_text = "Alarme sonnera à : " + hour + ":" + minute;
    let rem_time = get_remaining_time(Number(hour), Number(minute));
    let rem_text = "L'alarme sonnera dans : " + rem_time["hour"] + ":" + rem_time["minute"];
    let alarm_cont = easy_quick_create("div", "alarm");
    let alarm_time = easy_quick_create("div", "alarm_time", list_elem_text);
    let remaining = easy_quick_create("div", "alarm_time", rem_text);
    let remove_btn = easy_quick_create("button", ["btn", "btn-danger"], "Supprimer");
    let its_time = easy_quick_create("div", "alarm_time", "C'EST L'HEURE!!");
    let disable_btn = easy_quick_create("button", ["btn", "btn-warning"], "Arrêter");

    alarm_cont.dataset.id = alarm_id;

    easy_append_children(alarm_cont, [alarm_time, remaining, remove_btn]);

    let myinterval = setInterval(() => {
        let alarm_info = get_alarm_info(alarm_id);
        let newtime = get_remaining_time(Number(alarm_info.hour),
            Number(alarm_info.minute));
        remaining.textContent = "L'alarme sonnera dans : " + newtime["hour"] + ":" +
            newtime["minute"];
    }, 1000);

    let alarm_info = get_alarm_info(alarm_id);
    let sec_rem = get_remaining_seconds(Number(alarm_info.hour), Number(alarm_info.minute));
    let timeleft;

    if (sec_rem == 60) {
        let t = new Date();
        t_s = t.getSeconds();
        console.log("t_s = ", t_s);
        timeleft = setTimeout(() => {
            easy_append_children(alarm_cont, [its_time, disable_btn]);
        }, 1000 * t_s);
    } else {
        timeleft = setTimeout(() => {
            easy_append_children(alarm_cont, [its_time, disable_btn]);
        }, sec_rem * 1000);
    }


    remove_btn.addEventListener("click", (e) => {
        alarm_cont.remove();
        remove_alarm(alarm_id);
        clearInterval(myinterval);
        clearTimeout(timeleft);
    })

    disable_btn.addEventListener("click", (e) => {
        let alarm_info = get_alarm_info(alarm_id);
        let sec_rem = get_remaining_seconds(Number(alarm_info.hour), Number(alarm_info.minute));
        clearTimeout(timeleft);
        if (sec_rem <= 0) {
            timeleft = setTimeout(() => {
                easy_append_children(alarm_cont, [its_time, disable_btn]);
            }, 1000 * 60 * 60 * 24);
        } else {
            timeleft = setTimeout(() => {
                easy_append_children(alarm_cont, [its_time, disable_btn]);
            }, sec_rem * 1000);
        }

        its_time.remove();
        disable_btn.remove();
    })

    return alarm_cont;
}

//--------------------------------
// TIMER
//--------------------------------

function save_timer(hours, minutes, seconds, starttime) {
    let newid = Date.now();

    let endtime = convert_to_seconds(hours, minutes, seconds) + starttime;

    let myjson = {
        id: newid,
        start_time: starttime,
        end_time: endtime,
        hour: hours,
        minute: minutes,
        second: seconds
    };

    if (!localStorage.getItem("timers")) {
        myjson = [myjson];
        localStorage.setItem("timers", JSON.stringify(myjson));
    } else {
        let timers = JSON.parse(localStorage.getItem("timers"));
        timers.push(myjson);
        localStorage.setItem("timers", JSON.stringify(timers));
    }

    return newid;
}

function remove_timer(timer_id) {
    let mytimers = JSON.parse(localStorage.getItem("timers"));
    let target = mytimers.find(a => a.id == timer_id);
    let target_index = mytimers.indexOf(target);
    mytimers.splice(target_index, 1);

    if (mytimers.length > 0) {
        localStorage.setItem("timers", JSON.stringify(mytimers));
    } else {
        localStorage.removeItem("timers");
    }
}

function load_timers() {
    if (localStorage.getItem("timers")) {
        let timers = JSON.parse(localStorage.getItem("timers"));
        return timers;
    } else {
        return null;
    }
}

function get_timer_info(timer_id) {
    let mytimers = JSON.parse(localStorage.getItem("timers"));
    let target = mytimers.find(a => a.id == timer_id);
    return target;
}

function timer_remaining_seconds(currenttime, starttime) {
    return currenttime - starttime;
}

/**
 * Creates a timer element that will go down until 0
 * @param {*} id id of the timer
 * @param {*} h hours
 * @param {*} m minutes
 * @param {*} s seconds
 */
function create_timer_element(timer_id, starttime, h, m, s) {
    //let rem_time_sec = timer_remaining_seconds(parseInt(h), parseInt(m), parseInt(s), starttime);
    const timer_info = get_timer_info(timer_id);
    let now_sec = get_now_in_seconds();
    let time_now = timer_info.end_time - now_sec;
    let elem_text;
    if (time_now <= 0) {
        elem_text = "00:00:00";
    } else {
        elem_text = new Date((s + (m * 60) + (h * 60 * 60)) * 1000).toISOString().slice(11, 19);
    }


    let timer_cont = easy_quick_create("div", "alarm");
    let timer_time = easy_quick_create("div", "alarm_time", elem_text);
    let remove_btn = easy_quick_create("button", ["btn", "btn-danger"], "Supprimer");
    let its_time = easy_quick_create("div", "alarm_time", "Terminé!");
    // let disable_btn = easy_quick_create("button", ["btn", "btn-warning"], "Arrêter");
    timer_cont.dataset.id = timer_id;

    easy_append_children(timer_cont, [timer_time, remove_btn]);

    let myinterval = setInterval(() => {
        //timer_info = get_timer_info(timer_id);
        let newtime = timer_info.end_time - get_now_in_seconds();
        if (newtime < 0) {
            clearInterval(myinterval);
            easy_append_children(timer_cont, its_time);
        } else {
            //console.log(newtime);
            timer_time.textContent = new Date(newtime * 1000).toISOString().slice(11, 19);
        }
        // let current_time = Math.floor((Date.now()) / 1000);
        // let newtime = timer_remaining_seconds(current_time, timer_info.start_time);
        // console.log(newtime);

    }, 1000);

    // let timeleft = setTimeout(() => {
    //     clearInterval(myinterval);
    // }, get_now_in_seconds() - timer_info.end_time);

    remove_btn.addEventListener("click", (e) => {
        timer_cont.remove();
        remove_timer(timer_id);
        clearInterval(myinterval);
        // clearTimeout(timeleft);
    })

    return timer_cont;
}