function make_double_digit(num) {
    if (num < 10 && num.toString().length <= 1) {
        return "0" + num;
    } else {
        return num;
    }
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

function remove_alarm(alarm_id) {
    let myalarms = JSON.parse(localStorage.getItem("alarms"));
    let target = myalarms.find(a => a.id == alarm_id);
    let target_index = myalarms.indexOf(target);
    myalarms.splice(target_index, 1);
    if (myalarms) {
        localStorage.setItem("alarms", JSON.stringify(myalarms));
    } else {
        localStorage.removeItem("alarms");
    }

}

function create_alarm_elem(alarm_id, hour, minute) {
    let list_elem_text = "Alarme sonnera à : " + hour + ":" + minute;
    let alarm_cont = easy_quick_create("div", "alarm");
    let alarm_time = easy_quick_create("div", "alarm_time", list_elem_text);
    let remove_btn = easy_quick_create("button", ["btn", "btn-danger"], "Supprimer");
    let disable_btn = easy_quick_create("button", ["btn", "btn-warning"], "Arrêter");

    alarm_cont.dataset.id = alarm_id;

    remove_btn.addEventListener("click", (e) => {
        alarm_cont.remove();
        remove_alarm(alarm_id);
    })

    easy_append_children(alarm_cont, [alarm_time, remove_btn]);
    return alarm_cont;
}