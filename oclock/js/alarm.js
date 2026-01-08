const alarm_hour = easy_id_get("alarm_hour"),
    alarm_min = easy_id_get("alarm_minutes"),
    alarm_list = easy_id_get("alarm_list");

const button = easy_id_get("set_alarm");

if (load_alarms()) {
    let saved_alarms = load_alarms();
    for (i = 0; i < saved_alarms.length; i++) {
        //make an alarm element appear in list
        let list_elem = create_alarm_elem(saved_alarms[i].id, saved_alarms[i].hour, saved_alarms[i].minute);
        easy_append_children(alarm_list, list_elem);
    }
}

alarm_hour.addEventListener("input", (e) => {
    alarm_hour.value = make_double_digit(alarm_hour.value)
});

alarm_min.addEventListener("input", (e) => {
    alarm_min.value = make_double_digit(alarm_min.value)
});

button.addEventListener("click", (e) => {
    //create input element of alarm save with button to remove
    if (alarm_hour.value == "") {
        alarm_hour.value = "00";
    }
    if (alarm_min.value == "") {
        alarm_min.value = "00";
    }
    let myid = save_alarm(alarm_hour.value, alarm_min.value);
    list_elem = create_alarm_elem(myid, alarm_hour.value, alarm_min.value);
    //set it to activate at time and have a button to deactivate
    //might need another event listener?

    //save input element in list
    easy_append_children(alarm_list, list_elem);
    //reset input to 00:00
})