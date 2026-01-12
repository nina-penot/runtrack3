const alarm_hour = easy_id_get("alarm_hour"),
    alarm_min = easy_id_get("alarm_minutes"),
    alarm_list = easy_id_get("alarm_list");

const button = easy_id_get("set_alarm");

const allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

if (load_alarms()) {
    let saved_alarms = load_alarms();
    for (i = 0; i < saved_alarms.length; i++) {
        //make an alarm element appear in list
        let list_elem = create_alarm_elem(saved_alarms[i].id, saved_alarms[i].hour, saved_alarms[i].minute);
        easy_append_children(alarm_list, list_elem);
    }
}

alarm_hour.addEventListener("input", (e) => {

    if (!parseInt(e.data) && e.data != null && e.data != 0) {
        console.log(e.data)
        let index = alarm_hour.value.indexOf(e.data);
        console.log(index)
        let test = alarm_hour.value.slice(0, index) + alarm_hour.value.slice(index + 1);
        alarm_hour.value = test;
    }

    if (parseInt(alarm_hour.value) > alarm_hour.max) {
        alarm_hour.value = alarm_hour.max;
    }
    if (parseInt(alarm_hour.value) < alarm_hour.min) {
        alarm_hour.value = alarm_hour.min;
    }

});

alarm_min.addEventListener("input", (e) => {

    if (!parseInt(e.data) && e.data != null && e.data != 0) {
        console.log(e.data)
        let index = alarm_min.value.indexOf(e.data);
        console.log(index)
        let test = alarm_min.value.slice(0, index) + alarm_min.value.slice(index + 1);
        alarm_min.value = test;
    }

    if (parseInt(alarm_min.value) > alarm_min.max) {
        alarm_min.value = alarm_min.max;
    }
    if (parseInt(alarm_min.value) < alarm_min.min) {
        alarm_min.value = alarm_min.min;
    }

});

button.addEventListener("click", (e) => {
    //create input element of alarm save with button to remove
    if (alarm_hour.value == "") {
        alarm_hour.value = "00";
    }
    if (alarm_min.value == "") {
        alarm_min.value = "00";
    }
    if (typeof Number(alarm_min.value) != "number" || typeof Number(alarm_hour.value) != "number") {
        console.log("error: not a number");
    } else {
        alarm_hour.value = make_double_digit(alarm_hour.value);
        alarm_min.value = make_double_digit(alarm_min.value);
        let myid = save_alarm(alarm_hour.value, alarm_min.value);
        list_elem = create_alarm_elem(myid, alarm_hour.value, alarm_min.value);
        //set it to activate at time and have a button to deactivate
        //might need another event listener?

        //save input element in list
        easy_append_children(alarm_list, list_elem);
        //reset input to 00:00
        alarm_hour.value = "";
        alarm_min.value = "";
    }

})